import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {

    constructor(@InjectModel('Person') private readonly personModel: Model<any>){

    }

    ViewAllPeople(){
        
        return {rut: 'success'}
    }

    ViewPerson(){
        return {rut: 'success'}
    }

    SavePerson(){
        return {rut: 'success'}
    }

    ModifyPerson(){
        return {rut: 'success'}
    }

    RemovePerson(){

    }
    
}
