export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    hobbies: string[];
}

type PersonExtended = Person & {
    favoriteColor: FavoriteColor;
}

enum FavoriteColor {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

export {Person}