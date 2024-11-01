import { nanoid } from 'nanoid';
import URL from "../models/url.js";

export async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url)
        return res.status(400).json({ error: "url is required" });
    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitedHistory: []
    });
    res.render('home', {
        id: shortId
    });
}

export async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    res.json({
        totalClicks: result.visitHistory.length,
        visitedHistory: result.visitHistory
    });
}
