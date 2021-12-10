/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { A } from 'hookrouter';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import ItensListaTarefas from './itens-lista-tarefas';
import Paginacao from './paginacao';


function ListarTarefas() {
  const ITEN_POR_PAG = 3;

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItens, setTotalItens] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);
  useEffect(() => {
    function obterTarefas() {
      const tarefasDb = localStorage['tarefas'];
      let ListaTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTotalItens(ListaTarefas.length);

      setTarefas(ListaTarefas.splice((paginaAtual - 1) * ITEN_POR_PAG, ITEN_POR_PAG));

    }
    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }

  }, [carregarTarefas, paginaAtual]);
  function handkeMudarPagina(pagina) {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);

  }

  return (
    <div className="text-center">
      <h3>Tarefas a fazer</h3>
      <Table striped bordered hover responsive data-testid="tabela">
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
          <ItensListaTarefas tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas} />
        </tbody>
      </Table>
      <Paginacao
        tatalItens={totalItens}
        itenPorPagina={ITEN_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={handkeMudarPagina} />
    </div>
  )
}
export default ListarTarefas;