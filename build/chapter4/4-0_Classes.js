"use strict";
class User {
    constructor(firstName, lastName, nickName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
    }
    // private getFullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Player4 extends User {
    getNickName() {
        console.log(this.nickName);
    }
}
const sangwoo7 = new Player4("Sangwoo", "Lee", "swl");
sangwoo7.getFullName();
