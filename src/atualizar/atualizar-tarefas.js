/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal, Jumbotron } from 'react-bootstrap';
import { navigate, A } from 'hookrouter';

function AtualizarTarefa(props) {
  function voltar(event) {
    event.preventDefault();
    navigate('/');
  }
  return (
    <div>
      <h3 className="text-center">Atualizar</h3>
      <Jumbotron>
        <Form>
          <Form.Group>
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              type='text'
              placeholder='Digite a tarefa'
              minLength='5'
              maxLength='100'
              required
              data-testid='txt-tarefa' />
            <Form.Control.Feedback type='invalid'>
              A tarefa deve conter ao menos 5 caracteres.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='txt-center'>
            <Button variant='success' type='submit' data-testid='btn-atualizar'>
              Atualizar
            </Button>
            &nbsp;
            <A href='/' className='btn- btn-light' onClick={voltar}>
              Voltar
            </A>
          </Form.Group>
        </Form>
      </Jumbotron>
    </div>
  )
}
AtualizarTarefa.propTypes = {
  id: PropTypes.number.isRequired
}
export default AtualizarTarefa;