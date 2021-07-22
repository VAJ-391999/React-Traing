import { Body, Controller, Get, Post, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';


@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private mathService: MathService) {}

  @Post('add')
  async accumulate(data: number[]){
    this.logger.log('Adding'+ data.toString())
    return this.mathService.accumulate(data);
  }
}


