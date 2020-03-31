import { IPerson } from "./interface";

abstract class AbstractPerson implements IPerson {
    static type: string = "Person";
    abstract name: string;
    constructor(public age: number, public etc?: boolean) {}
}

export class Person extends AbstractPerson {
    constructor(public name: string, public age: number, public etc?: boolean) {
        super(age, etc);
    }
}