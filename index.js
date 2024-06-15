const express = require('express')
const app = express()
const port = 8000
app.get("/",(req, res) => {
    res.send("Welcome to Tamizha github repo!")
})
app.get("/demo",(req, res) => {
    res.send("Console")
})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})