const express = require("express")
const app = express();

app.use("/admin", (req, res, next) => {
    console.log("Authorization is getting checked")
    let token = "xyz";
    let isAuthorization = token === "xyz";
    if (!isAuthorization) {
        res.status(401).send("Unauthorized request")
    } else {
        next()
    }
})
// app.get("/user", (req, res, next) => {
//     res.send("User Data sent")
//     next()
// })
app.get("/admin/login", (req, res) => {
    console.log("admin auth is getting checked")
    res.send({
        firstName: "Arvind tiwari",
        address: "Gwalior Madhyapradesh"
    })
})


app.listen(9090, () => {
    console.log("sucessufully Port is on the way")
})