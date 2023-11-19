import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //body-parser ko sataa
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //url ma encode gareko
app.use(express.static("public")); //files, img, pdf store garna public folder ma
app.use(cookieParser());

export { app };
