import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put, Delete } from '@nestjs/common';
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
    GetPerson(@Res() res, @Param('id') id){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

    @Post()
    CreatePerson(@Res() res, @Body() body){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

    @Put('/:id')
    UpdatePerson(@Res() res, @Param('id') id, @Body() body, ){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

    @Delete('/:id')
    DeletePerson(@Res() res, @Param('id') id, @Body() body){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

}
