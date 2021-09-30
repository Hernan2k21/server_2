var express = require('express');
var router = express.Router();
var config = require('../../config')
var axios = require('axios')
/* GET home page. */


router.post('/new_payment', async function(req, res, next) {
  const {body} = req
  try {
    const {data} = await axios.post(config.mp_server.urls.new_payment,body)
    res.send(data)
  } catch (error) {
    console.log(error)
  }
});

router.post('/payment_notification', function(req, res, next) {
  console.log(req.body)
  res.status(200).json({})
});

module.exports = router;
