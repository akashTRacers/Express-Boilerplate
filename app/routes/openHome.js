const express = require("express");
const openHomeController = require("../controllers/openHome.js");
const openHome = () => {
    console.log("inside openHome.js Routes")
    const articlesRouter = express.Router();
    articlesRouter.get('/', openHomeController.getHome);

    return articlesRouter;
}
module.exports= openHome;