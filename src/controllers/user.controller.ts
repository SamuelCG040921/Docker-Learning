import { Request, Response } from "express";
import UserRepository from "../repositories/user.repository";

const userRepository = new UserRepository();

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email} = req.body;
        const user = await userRepository.createUser(name, email);
        res.status(201).json({user, message: "User created succesfully"});
    } catch (error) {
        res.status(400).json({error: "Error creating user", details: error});        
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: "Error fetching users", details: error});
    }
}