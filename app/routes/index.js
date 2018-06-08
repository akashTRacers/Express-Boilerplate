// const app = require("express")();
const initArticles1 = require("./articles");

const initRoutes = (app) => {
    app.use('/articles', initArticles1.initArticles());
    app.use('/',initArticles1.openHome());
    app.use('/insert',initArticles1.insertArticles());
}

module.exports = initRoutes;