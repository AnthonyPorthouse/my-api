import { Injectable } from '@nestjs/common';
import { ResponseFormat } from './responses';

@Injectable()
export class AppService {
  getHello(): ResponseFormat<{
    message: string;
  }> {
    return {
      data: {
        message: 'Hello, World!',
      },
    };
  }
}
