import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './schemas/person.schemas';
import { Model } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema}])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
