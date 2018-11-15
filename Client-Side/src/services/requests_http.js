import address from '../config/parameters';
import axios from 'axios'; 

export default function send (data , callback) {
    axios.post(
        address.dev_local.base + address.dev_local.port + '/send/music' ,
        {data})
    .then(res => {
        if (res.status === 200){
            callback(true); 
        }else {
            callback(false) ; 
        }
    })
} 

