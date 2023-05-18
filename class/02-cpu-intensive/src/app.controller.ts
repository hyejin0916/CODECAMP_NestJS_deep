import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/qqq')
  getHello(): string {
    let sum = 0;
    for (let i = 0; i <= 9000000000000; i++) {
      sum += i;
    } // for문이 도는 동안 다른 함수를 실행하면 블락이 걸림 -> 멀티 스레드를 사용하여 블락을 막아야한다.
    return '철수 성공';
  }

  @Get('/qqq2')
  getHello2(): string {
    return '영희 성공';
  }
}
