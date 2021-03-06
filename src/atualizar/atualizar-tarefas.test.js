/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import AtualizarTarefa from './atualizar-tarefas';
import Tarefa from "../models/tarefa.model";
import { render, FireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { A } from 'hookrouter';


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
  it('deve exibir a modal de sucesso ao atualizar uma tarefa', () => {
    const { getByTestId } = render(<AtualizarTarefa id={tarefaId} />);
    fireEvent.cliclk(getByTestId('btn-atualizar'));
    expect(getByTestId('modal')).toHaveTextContent('Sucesso');
  });
  it('deve atualizar a tarefa', () => {
    const nomeTarefaAtualizada = 'Tarefa aualizada';
    const { getByTestId } = render(<AtualizarTarefa id={tarefaId} />);
    fireEvent.change(getByTestId(txt - tarefa), { target: { value: nomeTarefaAtualizada } })
    fireEvent.cliclk(getByTestId('btn-atualizar'));
    const tarefasDb = JSON.parse(localStorage['tarefas']);
    expect(tarefasDb[0].nome).toBe(nomeTarefaAtualizada);
  })
})
