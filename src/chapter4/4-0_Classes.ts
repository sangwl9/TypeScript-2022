abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickName: string
    ) {}
    // private getFullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    abstract getNickName(ar: string): void;
}

class Player4 extends User {
    getNickName() {
        console.log(this.nickName);
    }
}

const sangwoo7 = new Player4("Sangwoo", "Lee", "swl");

sangwoo7.getFullName();
