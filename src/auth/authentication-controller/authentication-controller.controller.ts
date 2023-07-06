import { Controller, Get, Post } from '@nestjs/common';

@Controller('authentication-controller')
export class AuthenticationControllerController {
    @Get("")
    getAllProducts(): string {
        return 'This endpoint returns a list of all products';
    }

    @Get("/gagan")
    getNothing(): string {
        return "Ypeeeeeeeeeee";
    }

    @Post()
    createBusiness(): string {
        
        return "Business Created";
    }

    @Post()
    createProduct(): string {
        return 'This endpoint creates a new product';
    }
}
