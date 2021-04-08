// importing express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// importing your router from room.js
const room = require('./routes/room')
// telling app to use your router
app.use('/room', room)

// one endpoint that you can access from server.js
app.get('/', (req, res) => {
	res.send("sent from '/' in server.js")
})

// telling express to listen to a port, you now have a server
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
})