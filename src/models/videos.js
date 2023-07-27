const mongoose = require("mongoose");
const { Schema } = mongoose;

const VideoSchema = new Schema(
    {
        videoId: {
            type: String,
            required: [true, "Please input the video id"],
            unique: true,
        },
        thumbnailUrl: {
            type: String,
            required: [true, "Please input the iamge link"],
        },
        videoUrl: {
            type: String,
            required: [true, "Please input the video link"],
        },
        title: {
            type: String,
            required: [true, "Please input the title"],
        },
        channel: {
            type: String,
            required: [true, "Please input the channel"],
        },
        tags: {
            type: Array,
            required: [true, "Please input the tags"],
        },
    },
    {
        timestamps: true,
    }
);

const Video = mongoose.model("videos", VideoSchema);

module.exports = Video;
