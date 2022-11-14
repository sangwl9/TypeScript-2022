"use strict";
// abstract class User2 {
//     constructor(protected firstName: string, protected lastName: string) {}
// class Player8 extends User2 {
//     fullName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     sayHi(name: string): string {
//         return `Hello ${name}. My name is ${this.fullName()}`;
//     }
// }
class Player8 {
    constructor(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
function makeUser(user) {
    return {
        firstName: "nico",
        lastName: "las",
        fullName: () => "xx",
        sayHi: (name) => "string",
    };
}
