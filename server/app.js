const express = require("express"),
  morgan = require("morgan"),
  path = require("path")

const app = express()

// Setup logger
app.use(morgan("combined"))
// Setup static assets
// app.use("/index.html", express.static(path.resolve(__dirname, "../index.html")))
app.use("/build", express.static(path.resolve(__dirname, "../build")))
app.use("/public", express.static(path.resolve(__dirname, "../public")))

// Serve main index.html for the react-router to render
app.get("*", noCache, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"))
})

// Removing cache of the server
function noCache(req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate")
  res.header("Expires", "-1")
  res.header("Pragma", "no-cahce")
  next()
}

// Export the app module
module.exports = app
