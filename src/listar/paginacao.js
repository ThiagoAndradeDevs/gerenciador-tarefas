/* eslint-disable no-unused-vars */
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

function Paginacao(props) {
  function gerarPrimeiroIten() {
    return (
      <Pagination.First key="pagFirst" onClick={() => props.mudarPagina(1)} disabled={props.paginaAtual === 1} />
    )
  }
  function obterPaginacao() {
    let itens = [];
    itens.push(gerarPrimeiroIten());
    return itens;
  }
  return (
    <Pagination data-testid="paginacao">
      {obterPaginacao}
    </Pagination>
  )
}
Paginacao.propTypes = {
  totalItens: PropTypes.number.isRequired,
  itensPorPagina: PropTypes.number.isRequired,
  paginaAtual: PropTypes.number.isRequired,
  mudarPagina: PropTypes.func.isRequired
}
export default Paginacao;
