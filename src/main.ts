import { NestFactory } from '@nestjs/core'
import { HealthCheckModule } from './health-check/health-check.module'
import env from './configs/env'



async function bootstrap() {
  const app = await NestFactory.create(HealthCheckModule)
  await app.listen(env.PORT)
}
bootstrap()
