import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as iconv from 'iconv-lite';
import * as cheerio from 'cheerio';
import { ContentsBuilder } from './type/contents-builder';
import { IContents } from './type';

@Injectable()
export class CrawlerService {
  public async get(): Promise<IContents[]> {
    console.log('get contents');
    return this.getContents();
  }

  private async getContents(): Promise<IContents[]> {
    const contentsArray = [];
    const cateogry = ['100', '101', '102', '105'];
    const targets = cateogry.map(
      (item) =>
        `https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=${item}`,
    );

    const hrefs = [];
    for (const target of targets) {
      const page = await axios.get(target);
      const $ = cheerio.load(page.data);
      const items = $('.cluster_group .cluster_text a');
      items
        .filter((i) => i < 5)
        .each((i, elem) => {
          const href = elem.attribs.href;
          hrefs.push(href);
        });
    }

    for (const link of hrefs) {
      const page = await axios.get(link, { responseType: 'arraybuffer' });
      const decodedBody = iconv.decode(page.data, 'euc-kr');
      const $ = cheerio.load(decodedBody);
      const title = $('#articleTitle').text();
      const body = $('#articleBodyContents')
        .text()
        .replace(/(\t\n|\n|\t)/g, '');

      const contents = new ContentsBuilder()
        .setTitle(title)
        .setBody(body)
        .build();

      contentsArray.push(contents);
    }
    return contentsArray.filter(({ body }) => !!body);
  }
}
