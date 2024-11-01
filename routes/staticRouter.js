import express from "express";
import URL from "../models/url.js";

const router = express.Router();
console.log("inside static router")
router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");
    const allUrls = await URL.find({ createdBy: req.user._id });
    return res.render("home", {
        urls: allUrls
    })
})
router.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    return res.send("test")
})
router.get("/signup", async (req, res) => {
    return res.render("signup")
})
router.get("/login", async (req, res) => {
    return res.render("login")
})
export default router;