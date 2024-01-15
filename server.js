const express = require('express');
const http = require('http');
const io = require('socket.io');
require('dotenv').config();

const port = process.env.PORT;

const app = express()
const server = http.createServer(app)

const socket = io(server)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("homepage")
})


socket.on("connection", (socket) => {
    socket.on("message", (data) => {
        socket.broadcast.emit("message", data) 
    })

})

server.listen(port, () => {
    console.log("Server up and running on port: " +port)
})
