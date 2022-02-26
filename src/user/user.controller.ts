import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put,  } from '@nestjs/common';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    //Get Operations From Database 
        @Get()
        showAllUser(){
            return this.userService.getAllUser()
        }
        @Get(":id")
        showUserById(
            @Param("id",ParseIntPipe) id:number
        ){
            return this.userService.getUserById(id)
        }
    //Post Operation From Database  
    @Post()
    makeAUser(
        @Body() UserDto
    ){
            
        return this.userService.createUser(UserDto)
        
    }

    //Put/Patch Request From Database  

    @Put(":id")
    changeAUser(
        @Body() UserDto,
        @Param("id")id
    ){
        return this.userService.updateUser(id,UserDto)
    }

    //Delete Operation From Database 
        @Delete()
        deleteAllUser(){
            return this.userService.deleteAllUser()
        }
        @Delete(":id")
        deleteOneUser(
            @Param("id") id
        ){
            return this.userService.deleteOneUser(id)
        }
}

