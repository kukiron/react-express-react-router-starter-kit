const app = require("./app")

const port = process.env.PORT || 8080

// Listen to the port
app.listen(port, () => console.log(`🌎 App listening on port ${port}`))
