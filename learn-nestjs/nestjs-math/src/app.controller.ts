import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  
  private logger = new Logger('AppController');

  constructor(private mathService: MathService) {}

  //@Post('add')
  @MessagePattern('add')
  async accumulate(data: number[]){
    this.logger.log('Adding'+ data.toString())
    return this.mathService.accumulate(data);
  }


}
