import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put,  } from '@nestjs/common';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    //Get Operations From Database 
        @Get()
        showAllUser(){
            try {
                return this.userService.getAllUser()
            } catch (error) {
                throw new HttpException("Cannot Get User !!!",HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
        @Get(":id")
        showUserById(
            @Param("id",ParseIntPipe) id:number
        ){
            try {
                return this.userService.getUserById(id)
            } catch (error) {
                throw new HttpException("Cannot Get User !!!",HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    //Post Operation From Database  
    @Post()
    makeAUser(
        @Body() UserDto
    ){
        try {
            this.userService.createUser(UserDto)
        } catch (error) {
            throw new HttpException("Cannot Create  User !!!",HttpStatus.INTERNAL_SERVER_ERROR)
        }
        
    }

    //Put/Patch Request From Database  

    @Put(":id")
    changeAUser(
        @Body() UserDto,
        @Param("id")id
    ){
        try {
            return this.userService.updateUser(id,UserDto)
        } catch (error) {
            throw new HttpException("Cannot Update User !!!",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    //Delete Operation From Database 
        @Delete()
        deleteAllUser(){
            try {
                return this.userService.deleteAllUser()
            } catch (error) {
                throw new HttpException("Cannot Get User !!!",HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
        @Delete(":id")
        deleteOneUser(
            @Param("id") id
        ){
            try {
                return this.userService.deleteOneUser(id);
            } catch (error) {
                throw new HttpException("Cannot Get User !!!",HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
}

