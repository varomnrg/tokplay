const VideosServices = require("../services/videos");

exports.getThumbnailList = async (req, res, next) => {
    try {
        const { tags, q: query } = req.query;
        let thumbnailList;
        if (!tags) {
            thumbnailList = await VideosServices.getThumbnailList(query || "");
        } else {
            let lowerTags = tags.toLowerCase();
            thumbnailList = await VideosServices.getThumbnailListByTags(lowerTags, query || "");
        }

        return res.json({
            data: thumbnailList,
        });
    } catch (error) {
        next(error);
    }
};

exports.getVideoDetails = async (req, res, next) => {
    try {
        const { videoId } = req.params;
        const videoDetails = await VideosServices.getVideoDetails(videoId);
        return res.json({
            data: videoDetails,
        });
    } catch (err) {
        next(err);
    }
};

exports.getTagList = async (req, res, next) => {
    try {
        const tagList = await VideosServices.getVideoTags();
        return res.json({
            data: tagList,
        });
    } catch (err) {
        next(err);
    }
};

exports.addVideo = async (req, res, next) => {
    try {
        const { videoId, title, channel, tags } = req.body;
        const lowerTags = tags.map((element) => element.toLowerCase());
        const newVideo = await VideosServices.createVideo(videoId, title, channel, lowerTags);
        return res.json({
            data: newVideo,
        });
    } catch (err) {
        next(err);
    }
};
exports.getVideos = async (req, res, next) => {
    try {
        const videos = await VideosServices.getAllVideos();
        return res.json({
            data: videos,
        });
    } catch (err) {
        next(err);
    }
};
