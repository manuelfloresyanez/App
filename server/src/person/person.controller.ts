import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {

    constructor(private personService:PersonService){

    }

    @Get()
    async findAll(@Res() res){
        const persons = await this.personService.getAllPeople();
        if(!persons){
            throw new NotFoundException('No persons found')
        }
        return res.status(HttpStatus.OK).json(persons)
    }

    @Get(':id')
    async find(@Res() res, @Param() params){
        try{
            const person = await this.personService.getPerson(params.id);
            if(!person){
                throw new NotFoundException('Person not found')
            }
            return res.status(HttpStatus.OK).json(person)
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Post()
    async create(@Res() res, @Body() body){
        try{
            const person = await this.personService.savePerson(body);
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

    @Put(':id')
    async update(@Res() res, @Param() params, @Body() body){
        try{
            if(body.rut != undefined || body.name != undefined || body.lastName != undefined || body.age != undefined || body.course != undefined){
                const person = await this.personService.modifyPerson(params.id, body);
                return res.status(HttpStatus.OK).json({
                    message: 'Person successfully updated',
                    _id: person._id
                })
            }
            return res.status(HttpStatus.BAD_REQUEST).json({
                    "statusCode": 400,
                    "error": "Bad Request",
                    "message": "Invalid Data"
                  })
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Delete(':id')
    async deletePerson(@Res() res, @Param() params){
        try{
            const person = await this.personService.removePerson(params.id);
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
