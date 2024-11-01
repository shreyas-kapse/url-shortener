import express, { urlencoded } from "express";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";
import path from "path";
import router from "./routes/staticRouter.js";
const app = express();
import { connectToMongoDB } from "./connect.js";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import { checkAuth, restrictToLoggedInUsersOnly } from "./middlewares/auth.js";
dotenv.config();
const PORT = 8001;

const mongodbUrl = process.env.MONGODB_URL;
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(cookieParser());

connectToMongoDB(mongodbUrl)
    .then(() => console.log("mongodb conneced"))
    .catch((error) => console.log(error));


app.get('/**', checkAuth, router);
app.use("/user", userRouter)
app.use("/url", restrictToLoggedInUsersOnly, urlRoute);
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: { timeStamp: Date.now() }
        }
    })
    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("No URL found for the provided short ID.");
    }
})



app.listen(PORT, () => {
    console.log("server started at ", PORT)
});