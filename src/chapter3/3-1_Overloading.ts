type Add1 = {
    (a: number, b: number): number;
    (a: number, b: string): number;
};

const add1: Add1 = (a, b) => {
    if (typeof b === "string") return a;
    return a + b;
};

type Config = {
    path: string;
    state: object;
};

type Push = {
    (path: string): void;
    (config: Config): void;
};

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    } else {
        console.log(config.path);
    }
};

type Add2 = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
    if (c) return a + b + c;
    return a + b;
};
