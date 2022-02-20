import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetch, { RequestInit } from 'node-fetch';

@Injectable()
export class ThecampService {
  constructor(private readonly configService: ConfigService) {}

  public async login(): Promise<void> {
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

    const res = await fetch(url, options);
    const result = await res.json();
  }
}
