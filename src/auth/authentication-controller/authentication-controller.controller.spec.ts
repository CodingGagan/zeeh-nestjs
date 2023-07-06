import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationControllerController } from './authentication-controller.controller';

describe('AuthenticationControllerController', () => {
  let controller: AuthenticationControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthenticationControllerController],
    }).compile();

    controller = module.get<AuthenticationControllerController>(AuthenticationControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
