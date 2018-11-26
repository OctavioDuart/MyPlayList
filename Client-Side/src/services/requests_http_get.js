import ip from '../address/address';
import route from '../routes/route';
import axios from 'axios';

export default async function  get (callback) {
    axios.get(
        ip + route.get,
    ).then(res => {
        if (res.status === 200 ) {              
              return callback(res.data);
        }
         else{
             return  callback(false);
         }
    })
}