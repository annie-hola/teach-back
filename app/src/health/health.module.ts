import { Controller, Get, Module } from '@nestjs/common';

@Controller('health')
class HealthController {
  @Get()
  check() {
    return { status: 'ok', service: 'teachback-api', version: '0.1.0' };
  }
}

@Module({ controllers: [HealthController] })
export class HealthModule {}
