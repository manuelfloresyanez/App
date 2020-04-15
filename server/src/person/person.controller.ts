import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { identity } from 'rxjs';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {

    constructor(private personService:PersonService){

    }

    @Get()
    async GetAllPeople(@Res() res){
        const result = await this.personService.ViewAllPeople();
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Get('/:id')
    async GetPerson(@Res() res, @Param('id') id){
        const result = await this.personService.ViewPerson(id);
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Post()
    async CreatePerson(@Res() res, @Body() body){
        const result = await this.personService.SavePerson(body);
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Put('/:id')
    async UpdatePerson(@Res() res, @Param('id') id, @Body() body){
        const result = await this.personService.ModifyPerson(id, body);
        return res.status(HttpStatus.OK).json({
            result
        })
    }

    @Delete('/:id')
    async DeletePerson(@Res() res, @Param('id') id){
        const result = await this.personService.RemovePerson(id);
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }

}
