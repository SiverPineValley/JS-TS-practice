import {split, join} from "./utlity/stringFunction";
import {arrayLength, isEmpty} from "./utlity/arrayFunction";
import {signature} from "./utlity/genericFunction";
import {range, fold, filter, map, merge} from "./utlity/utility";
import {pureSort} from "./utlity/deepFunction";
import {doSomething} from "./utlity/doSomething";

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
const identity = <T>(n: T) => (`typeof ${n}: ${typeof n}`);
console.log(
    identity(true),
    identity<boolean>(true)
);

// Generic Signature
signature(arrayLength);

// Recursive Range
let numbers: number[] = range(1, 9 + 1);
console.log(numbers);

// Declarative Programming Examples
// Fold(Reduce)
numbers = range(1, 100 + 1);
let foldResult = fold(numbers, (result, value) => result + value, 0);
console.log("[1 range 100] Addition:", foldResult);

// Filter
const isOdd = (n: number): boolean => n % 2 === 1;
let filterResult = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log("[1 range 100] Odd Addition:",filterResult);

// Map
const powResult = fold(map(numbers, (pow) => pow * pow), (result, value) => result + value, 0);
console.log("[1 range 100] Power Addition:",powResult);

// Pure Function
function forcePure(array: readonly number[]) {
    console.log(array);
}

// Deep Copy: 깊은 복사. 객체/값을 모두 복사한다. -> filter, map
// Shallow Copy: 얕은 복사. 객체/값의 레퍼런스를 복사하므로, 원본도 같이 변경된다. -> splice, sort
let beforeSort = [6, 2, 4, 9];
let deepSort = pureSort(beforeSort);
console.log(beforeSort, deepSort);

// Merge
console.log(merge([1], [2,3,4], [5,6], [7,8,9,10]));

// Tuple
let [result, errorMessage] = doSomething();
console.log(result, errorMessage);