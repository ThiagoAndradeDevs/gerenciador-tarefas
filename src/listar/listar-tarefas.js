/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { A } from 'hookrouter';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage['tarefas'];
      let ListarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTarefas(ListarTarefas);
    }
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }

  }, [carregarTarefas]);

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela"></Table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>
            <A href="/cadastrar"
              className="btn btn-success btn-sm"
              data-testid="btn-nova-tarefa">
              <FontAwesomeIcon icon={faPlus} />
              &nbsp;
            </A>
          </th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </div>
  )
}
export default ListarTarefas;