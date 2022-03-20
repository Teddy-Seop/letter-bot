import { IContents } from '@module/crawler/type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ParserService {
  public parse(contents: IContents[]): string[] {
    const parsedContents: string[] = [];
    const divider = new Array(10).fill('=').join('');

    contents.forEach(({ title, body }) => {
      const lastContents = parsedContents[parsedContents.length - 1];
      const contents = `<b>${title}</b><br/><br/>${body}<br/><br/>${divider}`;
      const replacedContents = `${lastContents}${contents}`;

      if (replacedContents.length < 1400) {
        parsedContents.splice(parsedContents.length - 1, 1, replacedContents);
      } else {
        parsedContents.push(contents.slice(0, 1400));
      }
    });

    return parsedContents;
  }
}
