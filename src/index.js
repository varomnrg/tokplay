require("dotenv").config();
const express = require("express");
const http = require("http");
const { initializeSocket } = require("./socket");
const app = express();
const httpServer = http.createServer(app);
const cors = require("cors");

const mongoose = require("mongoose");
const { errors } = require("celebrate");
const errorHandler = require("./middlewares/errorHandler");

const passport = require("passport");
const strategy = require("./config/authConfig");

const router = require("./routes");

const port = process.env.PORT || 3000;

// Express middlewares
app.use(cors()); // CORS
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // URL-encoded body parser

// Passport JWT
passport.use(strategy);
app.use(passport.initialize());

// Initialize WebSocket
initializeSocket(httpServer);

// Log all incoming requests
app.use((req, _, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.use("/", router);

// Error handling
app.use(errors()); // Celebrate error handler
app.use(errorHandler); // Custom error handler

// Connect to MongoDB and start server
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to MongoDB");
    // Start server
    httpServer.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

db.on("error", (err) => {
    console.log(err);
});
