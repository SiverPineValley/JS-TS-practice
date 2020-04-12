export const signature = <T>(cb: (arg: T[]) => number): void => {
    console.log("callback: ", cb([]));
}