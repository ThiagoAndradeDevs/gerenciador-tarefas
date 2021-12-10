/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import Paginacao from './paginacao';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


describe('Teste do componente de paginaçao', () => {
  it('deve reinderizar o componente sem errros', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Paginacao
        totalItens={10}
        itensPorPagina={10}
        paginaAtual={1}
        mudarPagina={() => false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})