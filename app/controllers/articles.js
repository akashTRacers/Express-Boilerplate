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
            console.log(results);
            res.render(path,{
              title:'Articles',
              articles1:results
      
          });
        } 
    })
    }
}

module.exports =articlesController;

