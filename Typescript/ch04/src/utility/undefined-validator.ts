// typescript에서는 undefined도 false로 취급하지 않는다.
export const getName = (IN: any): string => IN ? IN.name : "unknown name";