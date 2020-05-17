import React from 'react';
import styled from 'styled-components';

const AppMensagem = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  height: 640px;
  margin: auto;
  margin-top: 8px;
  border: 1px solid black;
`

const InputNomeUsuario = styled.input `
  width: 90px;
  margin-bottom: 5px;
  padding-left: 1px;
`

const InputMensagem = styled.input `
  width: 385px;
  margin-bottom: 5px;
  padding-left: 1px;
`

const Botao = styled.button `
  margin-bottom: 5px;
`

class App extends React.Component {

  state = {

    mensagens: [],

    valorInputUsuario: "",
    valorInputMensagem: ""

  };

  adicionaMensagem = () => {
    const mensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };
  
    const novaMensagem = [...this.state.mensagens, mensagem];
    this.setState({mensagens: novaMensagem});
  
  };
  
  onChangeInputUsuario = event => {
    this.setState({valorInputUsuario: event.target.value});
  };
  
  onChangeInputMensagem = event => {
    this.setState({valorInputMensagem: event.target.value});
  };  

  onKeyPressEnter = event => {
    if(event.key === 'Enter') {
      return this.adicionaMensagem()
    }
  }

  deletarMensagem = () => {
    const del = window.confirm("Tem certeza que deseja deletar essa mensagem?")
    return del;
  };

  render() {
    const listaMensagens = this.state.mensagens.map((msg, index) => {  
      return (
        <p key={msg.index} onDoubleClick={this.deletarMensagem}>
          {msg.usuario}: {msg.mensagem}
        </p>      
      );
    });

    return (
      
      <div className="App">
        <AppMensagem>

          <div>
            {listaMensagens}
          </div>

          <div>
            <InputNomeUsuario
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            
            <InputMensagem
              onKeyPress={this.onKeyPressEnter}
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <Botao onClick={this.adicionaMensagem}>Enviar</Botao>
          </div>

        </AppMensagem>       
      </div>
    );
  }
}

export default App;
