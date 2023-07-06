import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationControllerController } from './auth/authentication-controller/authentication-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthenticationControllerController],
  providers: [AppService],
})
export class AppModule {}
