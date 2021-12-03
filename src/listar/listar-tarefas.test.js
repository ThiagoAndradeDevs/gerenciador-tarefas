/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import ListarTarefas from './listar-tarefas';

describe('Teste do componente de listagem de tarefas', () => {
  it('Deve reinderizar o componente sem eroos', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarTarefas />, div);
    React.unmountComponentAtNode(div);
  });
});
