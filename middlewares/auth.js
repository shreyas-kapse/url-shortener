import { getUser } from "../service/auth.js";

export async function restrictToLoggedInUsersOnly(req, res, next) {
    console.log("Cookies received:", req.cookies);
    const userId = req.cookies?.uid;
    if (!userId) return res.redirect("/login");
    const user = getUser(userId);
    if (!user) return res.redirect("/login");
    req.user = user;
    next();
}

export async function checkAuth(req, res, next) {
    const userId = req.cookies?.uid;

    const user = getUser(userId);
    req.user = user;
    next();
}