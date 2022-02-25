import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    users=[
        {
            id:1,
            email:"lorem@gmail.com",
            userName:"lorem345",
            password:"12345"
        },
        {
            id:2,
            email:"borem@gmail.com",
            userName:"borem3450",
            password:"123495"
        },
        {
            id:3,
            email:"torem@gmail.com",
            userName:"lorem345",
            password:"123485"
        },
    ]
    //GET
    getUser(){
        return this.users
    }
    getUserById(id:Number){
        return this.users.find((user)=>user.id===id)
    }

    //POST

    createAUser(UserDto){
        this.users.push(UserDto)
    }

    //PATCH/PUT

    updateAUser(id:number,UserDto){
        const targetUser = this.users.find((user)=>user.id===id)
        targetUser.email = UserDto.email;
        targetUser.userName = UserDto.userName;
        targetUser.password = UserDto.password;
        this.users.push(targetUser)
    }

    //DELETE

    removeUsers(){
        this.users = []
        return this.users;
    }
    removeUserById(id:number){
        return this.users.filter((user)=>{return user.id != id})
    }
}
