import { NestMiddleware } from "@nestjs/common";
import { Request } from "express";
export declare class validateUser implements NestMiddleware {
    use(req: Request): void;
}
