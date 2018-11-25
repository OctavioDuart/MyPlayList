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


router.get('/get/musics' , (req , res ) => {
    var logAPI = new Promise(
        function (resolve, reject) {
           try {
                var time = new Date();
                var log = {
                    message: "Request àt in route '/get/music' àt ",
                    hour: time
                };
            resolve(console.log(log.message + log.hour));
            } catch(e) {
                var error = new Error('Error in request : ' ,e);
                reject(error);
            }
        }
    );

        var getData = function () {
            logAPI
            .then(function () {
                return model_play_list.find();
            })
            .then(function (result) {
                return res.status(200).send(result);
            })
            .catch(function (error) {
                return res.status(500).send(error);
            });
        }

        getData();  
})
module.exports = app => app.use('/' , router); 