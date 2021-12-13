/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefas';
import Tarefa from "../models/tarefa.model";
import { render, FireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Teste do componente de atualizaçao de tarefas', () => {
  const tarefaId = 1;
  const tarefa = new Tarefa(tarefaId, 'Nova tarefa', false);

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([tarefa]);
  })
  it('deve reinderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AtualizarTarefa id={tarefaId} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
