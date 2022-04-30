import { Test, TestingModule } from '@nestjs/testing';
import { HealthCheckController } from './health-check.controller';

describe('AppController', () => {
  let healthCheckController: HealthCheckController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthCheckController]
    }).compile();

    healthCheckController = app.get<HealthCheckController>(HealthCheckController);
  });

  describe('root', () => {
    it('should return a "Service running properly =)"', () => {
      expect(healthCheckController.getHealthCheck()).toEqual({ status: 'Service running properly =)' });
    });
  });
});
