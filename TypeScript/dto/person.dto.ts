export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    hobbies: string[];
}

type PersonExtended = Person & {
    favoriteColor: FavoriteColor;
    adress: Address;
}

type Address = {
    street: string;
    number: number;
    city: string;
    postalCode: number;
}

enum FavoriteColor {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

export {PersonExtended, FavoriteColor}