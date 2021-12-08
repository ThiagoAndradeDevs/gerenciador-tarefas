/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom';
import ItensListaTarefas from './itens-lista-tarefas';
import Tarefa from '../models/tarefa.model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('Teste do componente que exibe item da listagem de tarefas', () => {

  it('Deve reinderizar o componente sem eroos', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ItensListaTarefas tarefas={[]}
        recarregarTarefas={() => false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })


})