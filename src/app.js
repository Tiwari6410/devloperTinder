const express = require("express")
const { adminAuth } = require("./middleware/auth")
const app = express();

app.use("/admin", adminAuth)

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