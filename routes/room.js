// define express from express module
const express = require('express')
// devine router from express
const router = express.Router()


// Notice that even though the PATH is '/' you access it through /room
// This is because the router was imported that way in server.js
router.get('/', (req, res) => {
	res.send("sent from '/' in room.js")
})

// This is how you pass parameters from the url.
// the address /room/writeWhatEverYouWantHere would load your req.params accordingly
router.get('/:variable', (req, res) => {
	res.send(`sent from '/:variable' in room.js you entered:${req.params.variable}`)
})

// export the router so that all of those endpoints are ready to be imported in server.js
module.exports = router