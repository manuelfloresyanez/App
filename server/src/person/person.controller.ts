import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('people')
export class PersonController {


    @Get()
    GetAllPeople(@Res() res){
        return res.status(HttpStatus.OK).json({
            success: 'Success'
        })
    }

    @Get('/:id')
    GetPerson(@Param('id') id, @Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

    @Post()
    CreatePerson(@Res() res,@Body() body){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

    @Put(':/id')
    UpdatePerson(@Param('id') id, @Body() body, @Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

}
