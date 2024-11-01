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
    try {
        const userId = req.cookies?.uid;

        if (!userId) {
            return res.status(400).json({ error: 'User ID not found in cookies, Please login' });
        }

        const user = await getUser(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}