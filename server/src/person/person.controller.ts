import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { identity } from 'rxjs';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {

    constructor(private personService:PersonService){

    }


    @Get()
    GetAllPeople(@Res() res){
        const result = this.personService.ViewAllPeople();
        return res.status(HttpStatus.OK).json({
            result
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
