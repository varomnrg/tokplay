const socketIO = require("socket.io");

let initializedIo;

// Initialize socket.io
function initializeSocket(server) {
    const io = socketIO(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        socket.on("join_room", (room) => {
            socket.join(room);
        });

        socket.on("leave_room", (room) => {
            socket.leave(room);
        });
    });
    initializedIo = io;
    return io;
}

// Get socket.io instance
function getIO() {
    if (!initializedIo) {
        throw new Error("Socket.io has not been initialized.");
    }
    return initializedIo;
}

module.exports = {
    initializeSocket,
    getIO,
};
