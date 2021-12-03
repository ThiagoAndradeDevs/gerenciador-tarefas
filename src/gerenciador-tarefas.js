/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  ' /atualizar/id:': ({ id })
};


function GerenciadoTarefas() {
  return useRoutes(routes);
}

export default GerenciadoTarefas;
