import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch, { RequestInit } from 'node-fetch';

@Injectable()
export class ThecampService {
  constructor(private readonly configService: ConfigService) {}

  public async login(): Promise<string> {
    try {
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
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}
