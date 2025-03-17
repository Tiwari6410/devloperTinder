console.log("arvind tiwari is a richest person in the world")

const express = require("express")

const app = express();


// app.get(/.*fly$/, (req, res) => {
//     res.send({ firstname: "arvind", lastname: "tiwari" })
// })
// app.get(/a/, (req, res) => {
//     res.send({ firstname: "arvind", lastname: "tiwari" })
// })
app.get("/user/:userId/:password", (req, res) => {
    console.log(req.params)
    res.send({ firstname: "arvind", lastname: "tiwari" })
})
app.post("/user", async (req, res) => {
    console.log(req.body)
    res.send("data Successfully saved to the database")
})
app.delete("/user", (req, res) => {
    res.send("Successfully put api has called")
})

app.use("/test", (req, res) => {
    res.send("hello grom the server")
})


app.listen(7777, () => {
    console.log("server is running successfully ")
})