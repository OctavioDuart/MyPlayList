import React , {Component} from 'react';
import get from '../../services/requests_http_get';
import '../generic_style.css';
import './style_table.css';
import 'bootstrap/dist/css/bootstrap.css'


export default class Table extends Component {
    state = {
        playlist : []
    }

    componentDidMount() {
        this.getPlayList();
    }

    /* @  No código abaixo o retorno da API só poderá ser 
       @  atribuido ao estado do componente (através do setState)
       @  usando arrow function ' => ' . O motivo é que o 
       @  retorno da chamada ajax não está vinculada ao componente , 
       @  ela é atribuido através de uma função de callback . 
       @  e o 'this' é uma referência ao contexto em que é chamado 
       @  e como o mesmo não foi declarado ele será undefined e consequentemente
       @  a função setState retornará erro . Para manter o contexo do this com
       @  o contexto do componente , devemos usar arrow function  
       @  fonte: https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined
    */

    getPlayList =  () => {
        get((result) => {     
            if (result !== undefined && result !== null && result.length !== 0 ) {
                this.setState({playlist : result});
            } 
             else{
                 alert("No musics in Database")
             }       
                     
        })
    };

    render(){
        return(      
            <div>    
                <h2>Your playlist has {this.state.playlist.length} musics </h2>  
                
                <table>               
                    <thead>
                        <tr>
                            <th>Music</th>
                            <th>Artist</th>
                            <th>Album</th>
                            <th>Style</th>
                            <th>Access</th>
                        </tr>
                    </thead>                   
                    <tbody>
                        <tr>
                        {this.state.playlist.map(playlist =>(
                             <td key={playlist._id}>{playlist.music}</td>                            
                        ))}                                                                                                   
                         </tr>     
                    </tbody>                                 
                </table>
            </div>
        )
    }
};


