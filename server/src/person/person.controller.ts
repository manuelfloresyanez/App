import { Controller, Get, Res, HttpStatus, Post, Body, Param, Put, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('people')
export class PersonController {

    constructor(private personService:PersonService){

    }

    @Get()
    async findAll(@Res() res): Promise<any[]>{
        const persons = await this.personService.getAllPeople();
        if(!persons){
            throw new NotFoundException('No persons found')
        }
        return res.status(HttpStatus.OK).json(persons)
    }

    @Get(':id')
    async find(@Res() res, @Param('id') id): Promise<any[]>{
        try{
            const person = await this.personService.getPerson(id);
            if(!person){
                throw new NotFoundException('Person not found')
            }
            return res.status(HttpStatus.OK).json(person)
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Post()
    async create(@Res() res, @Body() createPersonDto:CreatePersonDto): Promise<any[]>{
        try{
            const person = await this.personService.savePerson(createPersonDto);
            return res.status(HttpStatus.CREATED).json(
            {
                response: 'Person successfully created',    
                _id: person._id
            }
        )
        }catch{
            throw new BadRequestException("Invalid Data, please enter all the required fields")
        }
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id, @Body() body): Promise<any[]>{
        try{
            if(body.rut != undefined || body.name != undefined || body.lastName != undefined || body.age != undefined || body.course != undefined){
                const person = await this.personService.modifyPerson(id, body);
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
    async deletePerson(@Res() res, @Param('id') id): Promise<any[]>{
        try{
            const person = await this.personService.removePerson(id);
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
