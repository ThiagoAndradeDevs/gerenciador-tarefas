import { render, screen } from '@testing-library/react';
import GerenciadoTarefas from './gerenciador-tarefas';

test('renders learn react link', () => {
  render(<GerenciadoTarefas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
