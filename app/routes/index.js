// const app = require("express")();
const initArticles1 = require("./articles");
const bodyParser=require('body-parser');
const initRoutes = (app) => {
    app.use('/',initArticles1.openHome());
    app.use('/articles', initArticles1.initArticles());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/insert',initArticles1.insertArticles());
}

module.exports = initRoutes;