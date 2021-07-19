import { Delete, Get, Injectable, Patch, Post } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';

@Injectable()
export class UsersService {
    private users: User[] = [];

   
    public createUser(createUserData: CreateUserInput): User{
       const user: User = {
           userId: uuidv4(),
           ...createUserData
       }

       this.users.push(user);
       return user;
    }

   
    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        return getUsersArgs.userIds.map(userId => this.getUser({userId}))
    } 

   
    public getUser(getUserArgs: GetUserArgs): User {
        const user = this.users.find(user => user.userId === getUserArgs.userId)
        return user;
    }

    
    public updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(user => user.userId === updateUserData.userId);
        Object.assign(user, updateUserData);
       
        return user;
    }

   
    public deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId);
        const user = this.users[userIndex]

        this.users.splice(userIndex, 1)

        return user;
    }
}
