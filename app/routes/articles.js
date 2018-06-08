const express = require("express");
const articlesController = require("../controllers/articles");

const initArticles = () => {
    const articlesRouter = express.Router();
    articlesRouter.get('/', articlesController.getArticles);

    return articlesRouter;
}

const openHome = () => {
    const articlesRouter = express.Router();
    articlesRouter.get('/', articlesController.getHome);

    return articlesRouter;
}

const insertArticles=() =>{
    const articlesRouter = express.Router();
    articlesRouter.post('/', articlesController.insertRecord);

    return articlesRouter;

}

module.exports = {initArticles
                 ,openHome,insertArticles};