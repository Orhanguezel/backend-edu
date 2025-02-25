export default function userCheck(req, res, next) {
    if (!req.body.username || req.body.username.length < 5) {
        return res.status(400).json({ message: "Username must be at least 5 characters" });
    }

    console.log("Kullanıcı kaydı başarılı!");
    next(); 
}
