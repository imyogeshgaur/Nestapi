import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put,  } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    //Get Operations Locally 
        @Get()
        showAllUser(){
            return this.userService.getUser()
        }
        @Get(":id")
        showUserById(
            @Param("id",ParseIntPipe) id:number
        ){
            return this.userService.getUserById(id)
        }
    //Post Operation Locally 
    @Post()
    makeAUser(
        @Body() UserDto
    ){
        console.log(UserDto.userName);
        
        return this.userService.createAUser(UserDto)
        
    }

    //Put/Patch Request 

    @Put(":id")
    changeAUser(
        @Body() UserDto,
        @Param("id",ParseIntPipe)id:number
    ){
        return this.userService.updateAUser(id,UserDto)
    }

    //Delete Operation Locally 
        @Delete()
        deleteAllUser(){
            return this.userService.removeUsers()
        }
        @Delete(":id")
        deleteOneUser(
            @Param("id",ParseIntPipe) id:number
        ){
            return this.userService.removeUserById(id)
        }
}
