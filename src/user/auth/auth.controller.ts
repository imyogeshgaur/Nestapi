import { Controller } from '@nestjs/common';
import { Get,Post,Put,Delete } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    //Get Operations From Database 
    @Get()
    showAllUser() {}
    @Get(":id")
    showUserById() {}

    //Post Operation From Database  
    @Post()
    makeAUser() {}

    @Post("/hash")
    makeAPassHash() {}

    //Put/Patch Request From Database  

    @Put(":id")
    changeAUser() {}

    //Delete Operation From Database 
    @Delete()
    deleteAllUser() {}
    @Delete(":id")
    deleteOneUser() {
    }
}
