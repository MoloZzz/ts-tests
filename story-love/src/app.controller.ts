import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('check API')
@Controller()
export class AppController {
  @Get('ping')
  @ApiOperation({ summary: 'Check the availability of the service-core' })
  getHello(): string {
    return 'pong';
  }
}
