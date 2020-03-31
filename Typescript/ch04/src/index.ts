import {addTwo} from './utility/addTwo';
import {getName} from './utility/undefined-validator';
import {doCallback} from './utility/callback';
import {Calculator} from './utility/chain';

// function signature
console.log(addTwo(10,12));

// undefined validator
const james:{name: string} = {name: "james"};
console.log(getName(james));
console.log(getName(undefined));

// callback
doCallback(() => console.log("do Something..."));

// chain
let calc = new Calculator;
let result = calc.add(1).add(2).add(3).multiply(10).multiply(100).value;
console.log(result);