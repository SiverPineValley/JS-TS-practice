import {testMakePerson} from './utils/makePerson';
import {makePerson, Person} from './person/Person';
import IPerson from './person/IPerson';
import Chance from 'chance';
import * as Ramda from 'ramda';

const testMakeRandomAgedPerson = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');
    console.log(jane,jack);
}

const chance = new Chance();
let persons: IPerson[] = Ramda.range(0,2).map((n: number) => new Person(chance.name(), chance.age()));

console.log("1. Fixed");
testMakePerson();
console.log("\n2. Random age made by Math module");
testMakeRandomAgedPerson();

console.log("\n3. Random name and age");
persons.forEach(person => {
    console.log(person);
});