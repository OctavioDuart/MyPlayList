import address  from '../config/parameters';
import axios from 'axios';

export default function get (callback) {
    var route = address.dev_local.base + address.dev_local.port;    
    axios.get(
        route + '/get/musics'
    ).then(res => {
        if (res.status === 200 ) {
            callback (true);
        }
         else{
             callback(false);
         }
    })
}