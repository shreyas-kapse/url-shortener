import User from "../models/user.js";
import { v4 } from "uuid";
import { setUser } from "../service/auth.js";
export async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.redirect("/");
}
export async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
        password
    });
    if (user == null) {
        return res.redirect("/login");
    }
    const token = setUser(user);
    res.cookie("uid", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    });
    return res.redirect("/");
}