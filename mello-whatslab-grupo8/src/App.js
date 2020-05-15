import React, {Component} from 'react';
import AreaDoWhats from './components/AreaDoWhats';
import './App.css';
import Prototype from 'prop-types'



class App extends React.Component {
  state = {
    mensagens: [
      {
        usuario: "",
        texto: ""
      }
    ],

    valorInputUsuario: "",
    valorInputTexto: ""
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto
    };

    const novoMensagem = [...this.state.mensagens, novaMensagem];

    this.setState({ mensagens: novoMensagem, valorInputUsuario: "", valorInputTexto: ""  });
  };

  onChangeInputPessoa = event => {
    this.setState({
      valorInputUsuario: event.target.value
    });
  };

  onChangeInputTexto = event => {
    this.setState({ valorInputTexto: event.target.value });
  };

  render() {
    const listaDeComponentes = this.state.mensagens.map(mensagens => {
      return (
       <p>{mensagens.usuario} {mensagens.texto}</p>
      );
    });

    return (
      <div>
        <AreaDoWhats>
        <div>{listaDeComponentes}</div>
        <div>
          <input
            value={this.state.valorInputUsuario} 
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.valorInputTexto}
            onChange={this.onChangeInputTexto}
            placeholder={"Escreva a mensagem"}
          />

          <button onClick={this.adicionaMensagem}>Adicionar</button>
        </div>
        </AreaDoWhats>
      </div>
    );
  }
}

export default App;