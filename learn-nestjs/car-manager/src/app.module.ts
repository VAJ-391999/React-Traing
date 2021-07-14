import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/car-manager?retryWrites=true&w=majority'),
    CarModule
  ],
})
export class AppModule {}
