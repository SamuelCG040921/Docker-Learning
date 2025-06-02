import User from "../models/User";

export default class UserRepository {
    async createUser(name: string, email: string) {
        return await User.create({name, email});
    }

    async getAllUsers() {
        return await User.findAll();
    }
}