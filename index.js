import express from "express";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";
const app = express();
import { connectToMongoDB } from "./connect.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = 8001;

const mongodbUrl = process.env.MONGODB_URL;
app.use(express.json())

connectToMongoDB(mongodbUrl)
    .then(() => console.log("mongodb conneced"))
    .catch((error) => console.log(error));

app.use("/url", urlRoute);

app.get('/:shorId', async (req, res) => {
    const shortId = req.params.shorId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timeStamp: Date.now() }
        }
    })
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => {
    console.log("server started at ", PORT)
});