import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch, { RequestInit } from 'node-fetch';

import { DriverServiceAbstract } from '../driver.service.abstract';
import { IThecampCookie } from './interface';

@Injectable()
export class ThecampDriverService extends DriverServiceAbstract<
  IThecampCookie,
  void
> {
  constructor(protected readonly configService: ConfigService) {
    super(configService);
  }

  public async login(): Promise<IThecampCookie> {
    const url = 'https://www.thecamp.or.kr/login/loginA.do';
    const options: RequestInit = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',

      body: new URLSearchParams({
        userId: this.configService.get<string>('user.email'),
        userPwd: this.configService.get<string>('user.password'),
      }),
    };

    const { headers } = await fetch(url, options);

    const cookies = headers.get('set-cookie');

    const iuid = cookies.split(/\iuid=\s*([\w.\[\]]+)\s*;/g)[1];
    const token = cookies.split(/\Token=\s*([\w.\[\]\%]+)\s*;/g)[1];

    return {
      iuid,
      token,
    };
  }

  public async send(cookie: IThecampCookie, contents: string[]): Promise<void> {
    const url = 'https://www.thecamp.or.kr/consolLetter/insertConsolLetterA.do';
    try {
      for (let i = 0; i < contents.length; i++) {
        const data = {
          boardDiv: 'sympathyLetter',
          tempSaveYn: 'N',
          sympathyLetterContent: contents[i],
          sympathyLetterSubject: `인편 봇 ${new Date()} ${i}`,
          traineeMgrSeq: this.configService.get<string>(
            'thecamp.soldier.traineeMgrSeq',
          ),
          trainUnitCd: this.configService.get<string>(
            'thecamp.soldier.trainUnitCd',
          ),
          trainUnitEduSeq: this.configService.get<string>(
            'thecamp.soldier.trainUnitEduSeq',
          ),
        };

        const body = new URLSearchParams(data).toString();
        const options: RequestInit = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Cookie: `iuid=${cookie.iuid}; Token=${cookie.token}`,
          },
          body,
        };

        const response = await fetch(url, options);

        console.log(response.statusText, await response.text());
      }
    } catch (error) {
      console.error(error);
    }
  }
}
