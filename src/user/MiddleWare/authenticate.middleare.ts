import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request } from "express";


@Injectable()
export class validateUser implements NestMiddleware {
    use(req: Request) {
        const { authorization } = req.headers;
        if (!authorization) throw new HttpException("No Token is Provided", HttpStatus.BAD_REQUEST)
        else throw new HttpException("Token is Provided", HttpStatus.OK)
    }
}