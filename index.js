const express = require('express')
const app = express()
app.get("/",(req, res) => {
    res.send("Welcome to Tamizha Github repo!")
})
app.get("/port",(req, res) => {
    const port = server.address().port;
    res.send(`App running on port ${assignedPort}.`)
})
app.listen(0, () => {
    console.log(`App running on port ${port}.`)
})
