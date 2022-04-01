const express = require("express");
const router = express.Router();
let rates = require("./mockRateMentorData");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())


router.get('/ratePage/1',bodyParser.urlencoded({extended: true}), async (request,response,next) => {
    let { id } = request.params;
    id = Number(id);
    try {
        response.send(`
    <!DOCTYPE html>
    <html lang = 'en'>
        <head>
            <meta charset = "utf-8">
            <title>A webapp</title>
        </head>
    <body>
        <div role='application'>
            <form method = "post" action = '/ratePage/1'>
                <input name ='urlencoded' type = "text"/>
                <button type='submit'> send</button>     
            </form>
            <form method = "post" action = '/ratePage/1' enctype = 'text/plain'>
                <input name ='txtencoded' type = "text"/>
                <button type='submit'> send</button>     
            </form>
        </div>
    </body>
    </html>`)
    //   let rate = rates.find(rate => rate.id === id);
    //   response.status(200).json({
    //     currentRate: rate.currentRate
    //   }); 
      
    } catch (err) {
      response.status(400).json({
        message: "Some error occured",
        err
      });
    }
   
})
router.post('/ratePage/1',(request,response,next) => {
    console.log(request.body)
    response.end()
})


module.exports = router;
