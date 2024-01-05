import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    console.log("login triggered");
}

export const register = (req, res) => {
    console.log("register triggered");
}

export const logout = (req, res) => {
    console.log("logout triggered");
}