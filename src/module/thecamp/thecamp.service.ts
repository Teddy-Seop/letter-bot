import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch, { RequestInit } from 'node-fetch';

import { IThecampGroup } from './interface';
import { IContents } from '@module/crawler/type';

@Injectable()
export class ThecampService {
  constructor(private readonly configService: ConfigService) {}

  public async login(): Promise<string> {
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
    return headers.get('set-cookie');
  }

  public async send(cookie: string, contents: IContents[]): Promise<void> {
    const url = 'https://www.thecamp.or.kr/pcws/message/letter/insert.do';
    const group = this.configService.get<IThecampGroup>('group');
  }
}
