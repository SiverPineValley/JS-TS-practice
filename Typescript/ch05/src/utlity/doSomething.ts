import {ResultType} from "../type/resultType";

export const doSomething = (): ResultType => {
    try {
        throw new Error('WTFError');
    } catch(e) {
        return [false, e.message];
    }
}