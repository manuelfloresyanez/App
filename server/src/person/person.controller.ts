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
            const result = await this.personService.ViewPerson(id);
        return res.status(HttpStatus.OK).json(result)
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Post()
    async CreatePerson(@Res() res, @Body() body){
        try{
            const result = await this.personService.SavePerson(body);
        return res.status(HttpStatus.CREATED).json(
            {
                message: 'Person successfully created',    
                _id: result._id
            }
        )
        }catch{
            throw new BadRequestException('Invalid Data')
        }
        
    }

    @Put('/:id')
    async UpdatePerson(@Res() res, @Param('id') id, @Body() body){
        try{
            const result = await this.personService.ModifyPerson(id, body);
            if(result){
                return res.status(HttpStatus.OK).json({
                    message: 'Person successfully updated',
                    _id: result._id
                })
            }
        }catch{
            throw new NotFoundException('Invalid Id')
        }
        
    }

    @Delete('/:id')
    async DeletePerson(@Res() res, @Param('id') id){
        try{
            const result = await this.personService.RemovePerson(id);
            if(result){
                return res.status(HttpStatus.OK).json({
                    message: 'Person successfully deleted',
                    _id: result._id
                })
            }
        }catch{
            throw new NotFoundException('Invalid Id')
        }
    }

}
