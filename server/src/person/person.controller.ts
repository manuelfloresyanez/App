import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';

@Controller('people')
export class PersonController {


    @Get()
    GetAllPeople(@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

    @Post()
    CreatePerson(@Res() res,@Body() body){
        return res.status(HttpStatus.OK).json({
            message: 'Person created'
        })
    }



}
