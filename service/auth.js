import jwt from 'jsonwebtoken';
import Role from '../role.enum.js';
const secret = "ancmis";

export function setUser(user) {

    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: Role.USER
    }, secret);
}

export async function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
}