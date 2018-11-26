import React , {Component} from 'react';
import send from '../../services/requests_http_post';
import '../generic_style.css';
import './style_form.css';

export default class Form extends Component {
    // Criando estado dos campos
    state = {
        music: '',
        single_band: '',
        album: '',
        type_music: null ,
        link: ''
    }

    // Evento que altera o estado dos campos
    handleChangeMusic = (e) =>{this.setState({music : e.target.value})};
    handleBandMusic = (e) => {this.setState({single_band : e.target.value})};
    handleAlbum = (e) => {this.setState({album : e.target.value})};    
    handleTypeMusic = (e) => {this.setState({type_music : e.target.value || null})}
    handleLink = (e) => {this.setState({link : e.target.value})}

    handleSubmit = e => {
        e.preventDefault();

        //Objeto que representa o dado que esta saindo do cliente para o servidor
        const music_for_api = {
            music : this.state.music,
            single_band : this.state.single_band,
            album : this.state.album,
            type_music : this.state.type_music,
            link : this.state.link
        };

        send(music_for_api , function (result){
                if (result === true) {
                    alert ("Musica Cadastrada")
                }
                 else{
                     alert("Erro no cadastro")
                 }
        });
            
    };
    
    

    render() {
        return(
            <form id="form_music" onSubmit={this.handleSubmit}>
                <input 
                         type="text"
                         placeholder="Insert Music"
                         name="music"
                         onChange={this.handleChangeMusic}>
                </input>
                <input 
                        type="text"
                        placeholder="Single or Band"
                        name="single_band"
                        onChange={this.handleBandMusic}>
                </input>
                <input 
                        type="text"
                        placeholder="Album"
                        name="album"
                        onChange={this.handleAlbum}>
                </input>
                <select 
                        style={{marginLeft: '3%' }}
                        onChange={this.handleTypeMusic}>
                    <option value="Rock">Rock</option>
                    <option value="Funk">Funk</option>
                    <option value="RAP">RAP</option>
                    <option value="Reaggae">Reaggae</option>
                    <option value="Blue's">Blue's</option>
                    <option value="Samba">Samba</option>
                    <option value="Pagode">Pagode</option>
                    <option value="Sertanejo">Sertanejo</option>
                    <option value="Axé">Axé</option>
                    <option value="Eletrônica">Eletrônica</option>
                    <option value="Outro">Outro</option>
                </select>
                <input 
                        type="text"
                        placeholder="Link"
                        name="link"
                        style={{marginRight: '2%' }}
                        onChange={this.handleLink}></input>
                        <button >Send</button>
            </form>
        )
    }
}