import { Controller, Get, Res, HttpStatus } from '@nestjs/common';

@Controller('people')
export class PersonController {


    @Get()
    GetAllPeople(@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'Success'
        })
    }
}
