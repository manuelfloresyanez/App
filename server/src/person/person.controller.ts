import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {

    constructor(private personService:PersonService){

    }

    @Get()
    async GetAllPeople(@Res() res){
        const result = await this.personService.ViewAllPeople();
        return res.status(HttpStatus.OK).json(result)
    }

    @Get('/:id')
    async GetPerson(@Res() res, @Param('id') id){
        try{
            const persons = await this.personService.ViewPerson(id);
            if(!persons){
                throw new NotFoundException('Person not found')
            }
            return res.status(HttpStatus.OK).json(persons)
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Post()
    async CreatePerson(@Res() res, @Body() body){
        try{
            const person = await this.personService.SavePerson(body);
            return res.status(HttpStatus.CREATED).json(
            {
                message: 'Person successfully created',    
                _id: person._id
            }
        )
        }catch{
            throw new BadRequestException('Invalid Data')
        }
        
    }

    @Put('/:id')
    async UpdatePerson(@Res() res, @Param('id') id, @Body() body){
        try{
            if(body.rut != undefined || body.name != undefined || body.lastName != undefined || body.age != undefined || body.course != undefined){
                const person = await this.personService.ModifyPerson(id, body);
                return res.status(HttpStatus.OK).json({
                    message: 'Person successfully updated',
                    _id: person._id
                })
            }
            return res.status(HttpStatus.BAD_REQUEST).json({
                    "statusCode": 404,
                    "error": "Not Found",
                    "message": "Invalid Data"
                  })
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Delete('/:id')
    async DeletePerson(@Res() res, @Param('id') id){
        try{
            const person = await this.personService.RemovePerson(id);
            if(person){
                return res.status(HttpStatus.OK).json({
                    message: 'Person successfully deleted',
                    _id: person._id
                })
            }
        }catch{
            throw new NotFoundException('Invalid Id')
        }
    }

}
