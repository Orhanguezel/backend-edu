export default function userCheck(req, res, next) {
    if (!req.body.firstName) {
        return res.status(400).json({ message: "firstName is required" });
    }
    if (!req.body.lastName) {
        return res.status(400).json({ message: "lastName is required" });
    }
    if (!req.body.age) {
        return res.status(400).json({ message: "age is required" });
    }
    if (req.body.age < 18) {
        return res.status(400).json({ message: "age must be at least 18" });
    }
    if (!req.body.fbw) {
        return res.status(400).json({ message: "fbw is required" });
    }
    if (!req.body.email) {
        return res.status(400).json({ message: "email is required" });
    }
    console.log("User is valid");
    next();
}

