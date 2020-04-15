import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {

    constructor(@InjectModel('Person') private readonly personModel: Model<any>){

    }

    ViewAllPeople(){
        const allPersons = this.personModel.find();
        return allPersons;
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
