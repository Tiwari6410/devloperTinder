
const adminAuth = (req, res, next) => {
    console.log("Authorization token is getting checked")
    const token = "xyz";
    const isAuthorization = token === "xyz"
    if (!isAuthorization) {
        res.status(401).send("UnAuthorization User token")

    }
    if (isAuthorization) {
        // res.status(200).send("user has been authenticated with user token successfully ")
        next()
    }
}

module.exports = {
    adminAuth
}