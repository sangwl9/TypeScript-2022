"use strict";
const add1 = (a, b) => {
    if (typeof b === "string")
        return a;
    return a + b;
};
const push = (config) => {
    if (typeof config === "string") {
        console.log(config);
    }
    else {
        console.log(config.path);
    }
};
const add2 = (a, b, c) => {
    if (c)
        return a + b + c;
    return a + b;
};
