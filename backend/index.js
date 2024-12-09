import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import sequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import SalesRoute from "./routes/SalesRoute.js";
import NotaRoute from "./routes/NotaRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const sessionStore = sequelizeStore(session.Store);

const store = new sessionStore({
    db : db
});

// db.models = {};

// (async() => {
//     await db.sync({
//         alter : true
//     });
// })();

// store.sync();

app.use(session({

    secret : "secret",
    resave : false,
    saveUninitialized : true,
    store : store,
    cookie : {
        secure : "auto",
        httpOnly : true
    }

}));
app.use(cors({

    credentials: true,
    origin : "http://localhost:5173"

}));
app.use(express.static("public"));

app.use("/api",UserRoute);
app.use("/api",ProductRoute);
app.use("/api",AdminRoute);
app.use("/api",AuthRoute);
app.use("/api",SalesRoute);
app.use("/api",NotaRoute);

app.get("/",(req,res) => {
    res.json({message : "Server is running..."});
})

app.listen(process.env.PORT,() => {

    console.log("Server UP and RUNNING...");

});
