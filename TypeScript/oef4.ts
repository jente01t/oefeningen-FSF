import { Person, PersonExtended } from "./dto/person.dto"

const oef4 = (Person: Person) => {
    console.log(Person);
}

const oef4uitbreiding = ({firstName, lastName, age, hobbies}: PersonExtended): string => {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old. My hobbies are ${hobbies.join(", ")}.`;
}    

const oef4GroteUitbreiding = (personExtended: PersonExtended): Person => {
    return {
        firstName: personExtended.firstName,
        lastName: personExtended.lastName,
        age: personExtended.age,
        hobbies: personExtended.hobbies
    }
}

export {oef4, oef4uitbreiding, oef4GroteUitbreiding}