console.log("arvind tiwari is a richest person in the world")

const express = require("express")

const app = express();


app.use("/user", rH1, rH2, [rH3, rH4], rH5, rh6)

app.get("/user", (req, res, next) => {
    console.log("i am first controller console")
    res.send({ firstName: "Arvind", second: "Tiwari" })
    next()

},
    [(req, res, next) => {
        console.log("i am second controller console")
        res.send("response 2!!!")
        next()
    },
    (req, res, next) => {
        console.log("i am Third controller console")
        res.send("response 3!!!")
        next()
    }],

    (req, res) => {
        console.log("i am Fourth controller")
        res.send("response 4!!!!")
    })



app.listen(7777, () => {
    console.log("server is running successfully ")
})