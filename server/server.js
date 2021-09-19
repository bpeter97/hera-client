require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
var server = require("http").createServer(app);
global.io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		credentials: true,
	},
});

// middleware
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
	// static folder
	app.use(express.static(__dirname + "/public"));

	app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// declare port
const port = process.env.PORT || 5000;

// start the server
server.listen(port, () => console.log(`Server started on port ${port}.`));

module.exports = io;
