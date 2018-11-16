const express = require ('express');
const router = express.Router() ; 
const model_play_list = require ('../../models/play_list');



router.post('/send/music' , (req , res) => {
    registerData();
    function registerData() {
        try{        
            const music_data = req.body.data ; 
            const play_list = new model_play_list(music_data); 
            play_list.save();
            return res.status(200).send(true);
        }
        catch(e) {
            return res.status(500).send(e);
        }
     }
});




module.exports = app => app.use('/' , router); 