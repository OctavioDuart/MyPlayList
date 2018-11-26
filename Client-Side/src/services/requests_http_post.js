import ip from '../address/address';
import route from '../routes/route';
import axios from 'axios'; 

export default function send (data , callback) {
    axios.post(
        ip + route.post,
        {data})
    .then(res => {
        if (res.status === 200){
            return callback(true); 
        }
         else {
            return callback(false) ; 
        }
    })
};




