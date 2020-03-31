export const doCallback = (callback: () => void): void => {
    console.log("Before do something");
    callback();
    console.log("After do something");
}