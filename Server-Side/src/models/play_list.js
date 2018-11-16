const mongoose = require ('../database/database_connection');

const model = new mongoose.Schema({
    music :    {type: String  ,  required : false , trim : true },
    single_band  :    {type: String  ,  required : false , trim : true },
    album :    {type: String ,  required : false , trim : true },
    type_music: {type: String  ,  required : false , trim : true }, 
    link :      {type: String  ,  required : false , trim : true } 
});

module.exports = mongoose.model('play_list' , model);