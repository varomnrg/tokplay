const { celebrate, Segments } = require("celebrate");
const router = require("express").Router();
const { productList, productDetails, addProduct } = require("../utils/validationSchema");
const productsController = require("../controller/products");

// Get product list
router.get(
    "/list/:videoId",
    celebrate({
        [Segments.PARAMS]: productList,
    }),
    productsController.getProductsList
);

// Get product details with productId
router.get(
    "/:productId/details",
    celebrate({
        [Segments.PARAMS]: productDetails,
    }),
    productsController.getProductDetail
);

// Add product
router.post(
    "/",
    celebrate({
        [Segments.BODY]: addProduct,
    }),
    productsController.postProduct
);

// Get All products
router.get("/", productsController.getProducts);

module.exports = router;
