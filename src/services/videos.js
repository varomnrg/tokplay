const Video = require("../models/videos");
const { NotFoundError } = require("../utils/errors");

async function getAllUniqueTags() {
    try {
        const allVideos = await Video.find({}, "tags");
        const allTags = allVideos.flatMap((video) => video.tags);
        const uniqueTags = [...new Set(allTags)];
        return uniqueTags;
    } catch (error) {
        throw error;
    }
}

exports.getThumbnailList = async (query) => {
    try {
        const searchRegex = new RegExp(query, "i");

        const thumbnailList = await Video.find({ title: { $regex: searchRegex } }, "-_id videoId thumbnailUrl title channel tags");

        return thumbnailList;
    } catch (error) {
        throw error;
    }
};

exports.getThumbnailListByTags = async (tags, query) => {
    try {
        const searchRegex = new RegExp(query, "i");

        const thumbnailList = await Video.find({ tags: { $in: tags }, title: { $regex: searchRegex } }, "-_id videoId thumbnailUrl title channel tags");

        return thumbnailList;
    } catch (error) {
        throw error;
    }
};

exports.getVideoDetails = async (videoId) => {
    const videoDetails = await Video.findOne({ videoId: videoId }, "-_id videoId videoUrl title description tags");
    if (!videoDetails) throw new NotFoundError("Video not found");
    return videoDetails;
};

exports.getVideoTags = async () => {
    const tags = await getAllUniqueTags();
    return tags;
};

exports.createVideo = async (videoId, title, channel, tags) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hq720.jpg`;

    const newVideo = new Video({
        videoId: videoId,
        thumbnailUrl: thumbnailUrl,
        videoUrl: videoUrl,
        title: title,
        channel: channel,
        tags: tags,
    });

    const result = await newVideo.save();
    return {
        _id: result._id,
        videoId: result.videoId,
        thumbnailUrl: result.thumbnailUrl,
        videoUrl: result.videoUrl,
        title: result.title,
        channel: result.channel,
        tags: result.tags,
        createdAt: result.createdAt,
    };
};

exports.getAllVideos = async () => {
    const videos = await Video.find({}, "-__v").sort({ createdAt: -1 });
    return videos;
};
