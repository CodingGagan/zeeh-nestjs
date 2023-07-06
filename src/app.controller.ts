import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import LogRocket from 'logrocket';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    LogRocket.init('nn3rdc/z-demo');
    return this.appService.getHello();
  }
}
