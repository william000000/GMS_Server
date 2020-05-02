import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import dbConnection from './V1/database/mongoConnection';
import V1 from "./V1";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
	return res.status(200).send({ status: 200, message: "Welcome to GMS!" });
});
// This is our V1 of GMS APIs
app.use("/api", V1);

// When the route or path entered is incorrect
app.use((req, res, next) =>
	next({
		status: 404,
		message: "The route is currently unavailable",
	})
);

// Set up mongoose connection
dbConnection()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	// app is running on 3000
	console.log(`running on port ${PORT}...`);
});

export default app;

