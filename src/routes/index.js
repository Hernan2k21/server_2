var express = require('express');
var router = express.Router();
var config = require('../../config')
var axios = require('axios')
/* GET home page. */





router.post('/new_payment', async function(req, res, next) {

  const {description, price, quantity} = req.body

  if(description && price && quantity){
    const body = {
      description,
      price,
      quantity
    }
    try {

      const {data} = await axios.post(config.mp_server.urls.new_payment,body)
      res.send(data)

    } catch (error) {

      res.status(400).json({"error":error})  }

  }else{

    res.status(400).json({"error":"Invalid or missing params"})

  }

  
});

router.post('/payment_notification', function(req, res, next) {
  res.sendStatus(200)
});

module.exports = router;
