/* eslint-disable no-unused-vars */
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PropTypes from 'prop-types';

function Paginacao(props) {
  return (
    <div>

    </div>
  )
}
Paginacao.propTypes = {
  totalItens: PropTypes.number.isRequired,
  itensPorPagina: PropTypes.number.isRequired,
  paginaAtual: PropTypes.number.isRequired,
  mudarPagina: PropTypes.func.isRequired
}
export default Paginacao;
