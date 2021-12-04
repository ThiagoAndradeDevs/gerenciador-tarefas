import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefas';

describe('Teste do componente de atualizaçao de tarefas', () => {
  it('deve reinderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefa id={1} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
