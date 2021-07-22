import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
         {
             userId: 1,
             username: "payalbhatt",
             password: "payal123"
         },
         {
            userId: 2,
            username: "nikipatal",
            password: "niki123"
        }
    ]

    async findOne(username: string): Promise<User | undefined>{
        return this.users.find(user => user.username === username)
    }
}
