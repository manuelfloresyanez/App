import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {

    constructor(@InjectModel('Person') private readonly personModel: Model<any>){

    }

    getAllPeople(){
        const allPersons = this.personModel.find();
        return allPersons;
    }

    getPerson(id){
        const person = this.personModel.findById(id)
        return person;
    }

    savePerson(body){
        const person = this.personModel.create(body)
        return person
    }

    modifyPerson(id, body){
        const person = this.personModel.findByIdAndUpdate(id, body, {new: true})
        return person
    }

    async removePerson(id){
        const person = await this.personModel.findByIdAndDelete(id)
        return person
    }
    
}
