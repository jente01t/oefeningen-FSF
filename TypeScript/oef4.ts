import { Person, PersonExtended } from "./dto/person.dto"

const oef4 = (Person: Person) => {
    console.log(Person);
}

const oef4uitbreiding = ({firstName, lastName, age, hobbies}: PersonExtended): string => {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old. My hobbies are ${hobbies.join(", ")}.`;
}    


export {oef4, oef4uitbreiding}