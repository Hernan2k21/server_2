const dotenv = require('dotenv')

dotenv.config()

const config = {
    mp_server:{
        
        urls: {
            new_payment:process.env.MP_NEW_PAYMENT_URL,
           
        }
    },
    server:{
        port: process.env.PORT
    }
}

module.exports = config