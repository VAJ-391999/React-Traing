import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStatergy } from '../auth/local.statergy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from '../auth/auth.conatsnt';
import { JwtStatergy } from './jwt.statergy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: {expiresIn: '60s'}
    })
  ],
  providers: [AuthService, LocalStatergy, JwtStatergy],
  exports: [AuthService]
})
export class AuthModule {}
