import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TestMiddleware } from './car/middleware/test.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Payal:Payal@cluster0.9orwd.mongodb.net/car-manager?retryWrites=true&w=majority'),
    CarModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(TestMiddleware)
    .forRoutes('car')
  }
}
