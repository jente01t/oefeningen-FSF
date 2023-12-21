import { oef4, oef4uitbreiding } from "./oef4"
import { FavoriteColor, Person, PersonExtended, } from "./dto/person.dto"

const main = () => {
    const Person: Person = {
        firstName: "Jens",
        lastName: "Van Assche",
        age: 19,
        hobbies: ["Gaming", "Programming", "Music"]
    }

    const extenedPerson: PersonExtended = {
        ...Person,
        favoriteColor: FavoriteColor.Blue,
        adress: {
            street: "Kerkstraat",
            number: 1,
            city: "Kortenaken",
            postalCode: 3470
        }
    }
    oef4(Person)
    oef4uitbreiding(extenedPerson)
}

main()