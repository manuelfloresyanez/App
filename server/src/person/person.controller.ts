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
        const result = this.personService.ViewPerson(id);
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Post()
    CreatePerson(@Res() res, @Body() body){
        const result = this.personService.SavePerson();
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Put('/:id')
    UpdatePerson(@Res() res, @Param('id') id, @Body() body, ){
        const result = this.personService.ModifyPerson();
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Delete('/:id')
    DeletePerson(@Res() res, @Param('id') id, @Body() body){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

}
