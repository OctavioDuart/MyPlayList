const express = require ('express');
const bodyPareser  = require ('body-parser');  
const cors = require ('cors');
const port = process.env.PORT || 8000; 
const data_base_config = require('./src/database/database_connection');
const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyPareser.json());
app.use(bodyPareser.urlencoded({extended : true}));

//Carregando rotas 
require('./src/routes/controller/playListHttp')(app) ; 

app.listen(port , () => {
   console.log("Application running in localhost: " , port)
});
