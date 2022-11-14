type Player3<E> = {
    name: string;
    extraInfo: E;
};
type SangwooExtra = { favFood: string };
type SangwooPlayer = Player3<SangwooExtra>;

const sangwoo1: SangwooPlayer = {
    name: "Sangwoo",
    extraInfo: {
        favFood: "Kimchi",
    },
};

const sangwoo6: Player3<null> = {
    name: "Sangwoo2",
    extraInfo: null,
};
