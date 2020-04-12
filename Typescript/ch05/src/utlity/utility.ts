export const range = (from: number, to: number): number[] => from < to ? [from, ...range(from + 1, to)]: [];

export const fold = (array: number[], callback: (result: number, val: number) => number, initValue: number) => {
    let result: number = initValue;
    for(let i = 0; i < array.length; i++) {
        const value = array[i];
        result = callback(result, value);
    }
    return result;
}

export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
    let result: T[] = [];
    for(let index: number = 0; index < array.length; ++index) {
        const value = array[index];
        if(callback(value, index))
            result = [...result, value];
    }
    return result;
}

export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
    let result: Q[] = [];
    for(let index = 0; index < array.length; ++index) {
        const value = array[index];
        result = [...result, callback(value, index)];
    }
    return result;
}

export const merge = <T>(...arrays: T[][]): T[] => {
    let result: T[] = [];
    for(let index = 0; index < arrays.length; index++) {
        result = [...result, ...arrays[index]]
    }
    return result;
}