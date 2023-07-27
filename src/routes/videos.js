const { celebrate, Segments } = require("celebrate");
const router = require("express").Router();
const videosController = require("../controller/videos");
const { videoThumbnailList, videoDetails, addVideo } = require("../utils/validationSchema");

// Get video thumbnail list
router.get(
    "/thumbnail",
    celebrate({
        [Segments.QUERY]: videoThumbnailList,
    }),
    videosController.getThumbnailList
);

// Get video details with videoId
router.get(
    "/:videoId/details",
    celebrate({
        [Segments.PARAMS]: videoDetails,
    }),
    videosController.getVideoDetails
);

// Get video tags list
router.get("/tags", videosController.getTagList);

// Add video
router.post(
    "/",
    celebrate({
        [Segments.BODY]: addVideo,
    }),
    videosController.addVideo
);

// Get videos
router.get("/", videosController.getVideos);

module.exports = router;
