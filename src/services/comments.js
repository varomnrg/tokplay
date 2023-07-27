const Comment = require("../models/comments");

exports.getVideoComments = async (videoId) => {
    const comments = await Comment.find({ videoId: videoId }, "username comment");
    return comments;
};

exports.addVideoComment = async (videoId, userId, username, comment) => {
    const newComment = new Comment({
        videoId,
        userId,
        username,
        comment,
    });

    const result = await newComment.save({});

    return {
        id: result._id,
        videoId: result.videoId,
        userId: result.userId,
        username: result.username,
        comment: result.comment,
    };
};
