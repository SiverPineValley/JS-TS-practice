export const argsLog = (...args) => {
    let count: number = 1;
    for(let each of args) {
        if(each instanceof Object) {
            console.log(`${count++}: `,each);
            continue;
        }
        console.log(`${count++}: ${each}`);
    }
}