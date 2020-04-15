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
        const person = this.personModel.findById(id)
        return person;
    }

    SavePerson(body){
        const person = this.personModel.create(body)
        return person
    }

    ModifyPerson(id, body){
        const person = this.personModel.updateOneById(id, body)
        return person
    }

    RemovePerson(id){
        const person = this.personModel.removeOneById(id)
        return person
    }
    
}
