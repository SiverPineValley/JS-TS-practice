import { argsLog } from './utility/template';
import { IPerson } from './utility/interface';
import { Person } from './utility/class';

// Template print
argsLog("First", undefined, 3, true, null, { name: `hello TS!` });

// Interface and 
let optional: IPerson = { name: "JPark", age: 25, etc: true };
console.dir(optional);

// Anonymous Interface
export const anonymousPerson: {
    name: string,
    age: number,
    etc?: boolean
} = { name: 'HPark', age: 26 };

console.dir(anonymousPerson);

// Interface and Class
let jack: Person = { name: 'Jack', age: 23, etc: true };
console.dir(jack);
console.log(`Static Variable: ${Person.type}`);

// Type Conversion
let personTemp1: object = { name: "Temp One", age: "32" };
console.log(`person.name will throw Err`);
console.log("Type Conversion: ", (<{name: string}> personTemp1).name );
let personTemp2: {name: string, age: number} = {name: "Temp two", age: 33};
console.log("Or you should initialize object like this: ",personTemp2.name);

// Type Assertion
console.log("(<{name: string}> personTemp1).name === (personTemp1 as Person).name: ",(<{name: string}> personTemp1).name === (personTemp1 as Person).name);