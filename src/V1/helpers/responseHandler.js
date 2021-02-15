export default (res, message, status, data) => res.status(status).json({ message, data });
