/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';

function ConcluirTarefa(props) {
  return (
    <div>

    </div>
  )
}
ConcluirTarefa.protoTypes = {
  tarefa: PropTypes.object.isRequired,
  recarregarTarefa: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}
export default ConcluirTarefa;