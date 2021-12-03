/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import CadastrarTarefa from './cadastrar-tarefa';


describe('Teste do componente cadastro de tarefas', () => {
  it('Deve reinderizar sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CadastrarTarefa />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})