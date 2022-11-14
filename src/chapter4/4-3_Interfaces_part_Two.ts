// abstract class User2 {
//     constructor(protected firstName: string, protected lastName: string) {}

//     abstract sayHi(name: string): string;
//     abstract fullName(): string;
// }

interface User2 {
    firstName: string;
    lastName: string;

    sayHi(name: string): string;
    fullName(): string;
}

interface Human {
    health: number;
}

// class Player8 extends User2 {
//     fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     sayHi(name: string): string {
//         return `Hello ${name}. My name is ${this.fullName()}`;
//     }
// }

class Player8 implements User2, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}

    sayHi(name: string): string {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }

    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

function makeUser(user: User2): User2 {
    return {
        firstName: "nico",
        lastName: "las",
        fullName: () => "xx",
        sayHi: (name) => "string",
    };
}
