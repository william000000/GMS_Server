import { Router } from "express";

const route = Router();

route.get("/sample", (req, res) => {
	return res
		.status(200)
		.send({ status: 200, message: "Add APIs regarding auth" });
});

export default route;
