const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const imagens = require("./src/database/data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function(req, res) {
    return res.render("foodfy", { items: imagens })
})

server.get("/", function(req, res) {
    return res.render("receitas")
})

server.get("/", function(req, res) {
    return res.render("sobre")
})

server.listen(5500, function() {
    console.log("server is running")
})