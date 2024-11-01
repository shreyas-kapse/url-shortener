import jwt from 'jsonwebtoken';
const secret = "ancmis";

export function setUser(user) {

    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secret);
}

export function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secret);
}