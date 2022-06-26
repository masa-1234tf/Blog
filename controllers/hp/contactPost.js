var nodemailer = require("nodemailer")


module.exports = (req, res) => {
    console.log(req.body)
    res.send("Received POST Data!");
}