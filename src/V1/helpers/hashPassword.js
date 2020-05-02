import bycrpt from "bcrypt";

export const hashPassword = (req) => bycrpt.hash(req.body.password, 10);
