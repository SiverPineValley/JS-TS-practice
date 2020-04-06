import {split, join} from "./utlity/stringFunction";
import {arrayLength, isEmpty} from "./utlity/arrayFunction";

// Array declaration
let numArray: number[] = [1,2,3];
let stringArray: string[] = ['1','2','3'];
let objectArray: {name:string, age?:number}[] = [{name: "typescript"}, {name: "nodejs", age: 30}];

// String to Array on typescript
console.log(
    split('hello'),
    split('h;e;l;l;o',';')
);

console.log(
    join(['h','e','l','l','o']),
    join(['h','e','l','l','o'],'_')
)

// Generic Type
console.log(arrayLength(numArray));
console.log(arrayLength(stringArray));
console.log(arrayLength(objectArray));
console.log(isEmpty([]));
console.log(isEmpty([1]));

// Generic Function
const identity = <T>(n: T) => (`typeof ${n}: ${typeof n}\n`);
console.log(
    identity(true),
    identity<boolean>(true)
);