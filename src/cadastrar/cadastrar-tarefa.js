/* eslint-disable no-unused-vars */
import { A } from 'hookrouter';
import React, { useState } from 'react';
import { Button, Form, Modal, ToggleButtonGroup } from 'react-bootstrap'
import { navigate } from 'hookrouter';



function CadastrarTarefa() {
  const [tarefa, setTarefa] = useState(' ')
  const [formValidado, setFormValidado] = useState(false)
  const [exibirModal, setExibirModal] = useState(false)
  function cadastrar(evevnt) {

  }
  function handleTxtTarefa(event) {
    setTarefa(event.target.value)
  }
  function handleFecharModal() {
    navigate('/');
  }
  return (
    <div>
      <h3 className='text-center'>Cadastar</h3>
      <ToggleButtonGroup>
        <Form
          validated={formValidado}
          noValidate
          onSubmit={cadastrar}>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digitar a tarefa"
              minLength="5"
              maxLength="100"
              required
              value={tarefa}
              onChange={handleTxtTarefa}></Form.Control>
            <Form.Control.Feedback type="invalid">
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              variant="success"
              type="submit">
              Cadastrar
            </Button>
            &nbsp;
            <A href="/" className="btn btn-light">Voltar</A>
          </Form.Group>
        </Form>
        <Modal show={exibirModal} onHide={handleFecharModal}>
          <Modal.Header closeButton>
            <Modal.Title>sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tarefa adicionada com sucesso
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success"
              onClick={handleFecharModal}>Continuar</Button>
          </Modal.Footer>
        </Modal>
      </ToggleButtonGroup>

    </div>
  )
}
export default CadastrarTarefa;