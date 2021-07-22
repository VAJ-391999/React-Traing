import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable} from '@nestjs/common';
import { jwtConstant } from './auth.conatsnt';

@Injectable()
export class JwtStatergy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            //jwtFormRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstant.secret
        });
    }

    async validate(payload: any){
        return {userId: payload.sub, username: payload.username};
    }
}