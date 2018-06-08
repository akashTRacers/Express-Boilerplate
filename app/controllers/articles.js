class articlesController {
    
    

    static getArticles(req, res) {
        return res.end("dfhgkjhfk");
    }
    static deleteArticles(req,res)
    {
        let articles= require('../models/article');
        console.log("deletion started");
        articles.find({ _id:req.params.id }).remove().exec();
       res.send("<H1>1 records Deleted </H1>");
      }

    static insertArticles(req,res)
      {   
        let articles= require('../models/article');
        let article1 = new articles(req.body);
        article1.save((err, result) => {
        if (err) throw err;
        console.log("saved to database");
        res.send("<H1>1 records inserted </H1>");
        //alert("one Rocord inserted");
        //res.redirect('/')
        });
  
      }
}

module.exports =articlesController;

