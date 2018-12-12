import React , {Component} from 'react';
import get from '../../services/requests_http_get';
import '../generic_style.css';
import './style_table.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import img_delete from '../../img/delete.png'
import img_update from '../../img/update.png'




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

    //@Pega as musicas
    getPlayList =  () => {
        get((result) => {     
            if (result) 
                this.setState({playlist : result});               
                     
        });
    };

    //@Deleta
    handleClick = () =>{
        console.log("Teste")
    }

    render(){

        class Options extends Component {
            render() {
              return (
                <div>
                    <img id="img-delete" src={img_delete}  title="Deletar Música" onClick={this.handleClick}  /> 
                    <img id="img-update" src={img_update}  title="Alterar Dados"/>
                </div>
              );
            }
          }
          
          function activeFormatter(cell, row, enumObject, index) {
            return (
              <Options active={ cell } />
            );
          }

        return(          
                <BootstrapTable data={this.state.playlist} keyField='_id' bordered={false} search={true}  striped >
                        <TableHeaderColumn dataField='music'>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='single_band'>Band or Sigle</TableHeaderColumn>
                        <TableHeaderColumn dataField='album'>Album</TableHeaderColumn>
                        <TableHeaderColumn dataField='link'>Listen</TableHeaderColumn>
                        <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Options</TableHeaderColumn>
                </BootstrapTable>
        )
    }
};


