console.log("arvind tiwari is a richest person in the world")

const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Hy Men I am from dashboard")
})

app.use("/test", (req, res) => {
    res.send("Hy I am from Test routes")
})
app.use("/hello", (req, res) => {
    res.send("Hy I am from Test Hello Environment")
})

app.listen(7777, () => {
    console.log("server is running successfully ")
})