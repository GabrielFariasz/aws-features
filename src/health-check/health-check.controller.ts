import { Controller, Get, HttpCode } from '@nestjs/common'

@Controller()
export class HealthCheckController {
  constructor() {
    //
  }

  @Get('/healthCheck')
  @HttpCode(200)
  getHealthCheck(): object {
    return {
      status: 'Service running properly =)',
    }
  }
}
