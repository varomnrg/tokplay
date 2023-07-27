const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema(
    {
        videoId: {
            type: String,
            required: [true, "Please input the video id"],
        },
        userId: {
            type: String,
            required: [true, "Please input the userId"],
        },
        username: {
            type: String,
            required: [true, "Please input the username"],
        },
        comment: {
            type: String,
            required: [true, "Please input the comment"],
        },
    },
    { timestamps: true }
);

const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;
