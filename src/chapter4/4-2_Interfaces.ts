interface User1 {
    readonly name: string;
}

interface Player7 extends User1 {}

const nico4: Player7 = {
    name: "nico",
};

//nico4.name = "aaaa"
