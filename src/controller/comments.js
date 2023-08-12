const commentsServices = require("../services/comments");
const usersServices = require("../services/users");
const socket = require("../socket/index");

exports.getVideoComments = async (req, res, next) => {
    try {
        const { videoId } = req.params;
        const comments = await commentsServices.getVideoComments(videoId);
        return res.json({
            data: comments,
        });
    } catch (err) {
        next(err);
    }
};

exports.postVideoComment = async (req, res, next) => {
    try {
        const userId = req.user.id.toString();
        const name = await usersServices.getUserName(userId);
        const { videoId } = req.params;
        const { comment } = req.body;

        const newComment = await commentsServices.addVideoComment(videoId, userId, name, comment);

        const room = videoId;
        socket.getIO().to(room).emit("chat_message", newComment);
        return res.json({
            data: newComment,
        });
    } catch (err) {
        next(err);
    }
};
