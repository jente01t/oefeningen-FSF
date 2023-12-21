import { user } from "./dto/user.dto";
import { profile } from "./dto/user.dto";


const users: user[] = []
const profiles: profile[] = []

const registerUser = (user: user, profile?: profile) => {
    users.push(user)
    console.log(users)
}


const createProfile = (user: user, profile: profile) => {
    return {
        ...profile,
    }
}

const displayUserInfo = (user: user, profile: profile) => {
    console.log(registerUser, createProfile)
}

//displayUserInfo(registerUser, createProfile)
registerUser({id: 1, username: "test", email: "", password: "", registeredAt: new Date()})