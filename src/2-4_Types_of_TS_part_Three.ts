let a3: unknown;
// let b = a + 1

if (typeof a === "number") {
    let b = a + 1;
}

if (typeof a === "string") {
    let b = a.toUpperCase();
}

function hello(): void {
    console.log("x");
}

const a4 = hello();
// a4.toUpperCase();

function hello1(): never {
    throw new Error("xxx");
}

function hello2(name: string | number) {
    if (typeof name === "string") {
        return name.toUpperCase();
    } else if (typeof name === "number") {
        return name + 1;
    } else {
        throw new Error("xxx");
    }
}
