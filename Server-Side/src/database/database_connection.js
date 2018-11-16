const mongoose = require('mongoose');
const data_base = require ('./global_data');

mongoose.connect(
    data_base.local.ip+
    data_base.local.port+
    data_base.local.name,
    { useNewUrlParser: true },
    (err) => {
        if (err) {
             console.log("Error in connect with data base " , err)
        }
        else{
             console.log("Connect database with success")
        }
    }
)

module.exports = mongoose ; 
