import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {

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
