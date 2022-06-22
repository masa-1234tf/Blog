port = process.env.PORT
var express = require("express")
var app = express()　
app.use(express.urlencoded({ extended: true }))
var mongoose = require("mongoose")
var session = require("express-session")
var routers = require("./routes") 

app.set("view engine", "ejs")
app.use("/public", express.static("public"))

// Session
app.use(session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    cookie:{ maxAge: 300000 },
}))

// Connecting to MongoDB
mongoose.connect("mongodb+srv://masataka:Masataka1014@cluster0.o85hx.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Success: Connected to MongoDB")
    })
    .catch((error) => {
        console.error("Failure: Unconnected to MongoDB")
    })

app.use(routers)

// Page Notfound
app.get("*", (req, res) => {
    res.render("error", {message: "ページが存在しません"})
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})