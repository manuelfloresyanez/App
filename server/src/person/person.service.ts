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

    ViewPerson(id){
        const person = this.personModel.findOneById(id)
        return person;
    }

    SavePerson(body){
        const person = this.personModel.create(body)
        return person
    }

    ModifyPerson(){
        return {rut: 'success'}
    }

    RemovePerson(){

    }
    
}
