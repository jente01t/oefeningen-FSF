import { oef4 } from "./oef4"

const main = () => {
    const person: Person = {
        firstName: "Jens",
        lastName: "Van Assche",
        age: 19,
        hobbies: ["Gaming", "Programming", "Music"]
    }
    oef4(Person)
}

main()