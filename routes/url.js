import express from "express";
const router = express.Router();
import { handleGenerateNewShortURL } from "../controller/url.js"
import { handleGetAnalytics } from "../controller/url.js"


router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics)
export default router