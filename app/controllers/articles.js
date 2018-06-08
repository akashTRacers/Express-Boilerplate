class articlesController {
    
    

    static getArticles(req, res) {
        return res.end("dfhgkjhfk");
    }

    static getHome(req,res)
    {
      let articles= require('../models/article');
      const  path='/home/rails/Akash/express-boilerplate/views/index.pug';
      articles.find({}, function(err, results){
        if(err)
        {
            console.log(err);
        }
        else{
           // console.log(results);
            res.render(path,{
              title:'Articles',
              articles1:results
      
          });
        } 
    })
    }

    static insertRecord(req,res)
    {   
        let articles= require('../models/article');
        let article1 = new articles(req.body);
         article1.save((err, result) => {
             if (err) throw err;
             console.log("saved to database");
             res.send("<H1>1 records inserted </H1>");
             //alert("one Rocord inserted");
             res.redirect('/')
         });

    }

    static deleteRecord(req,res)
    {
        let articles= require('../models/article');
        console.log("deletion started");
        articles.find({ _id:id }).remove().exec();
       res.send("<H1>1 records Deleted </H1>");
      }

}

module.exports =articlesController;

