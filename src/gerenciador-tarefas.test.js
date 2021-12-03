import { render, screen } from '@testing-library/react';
import GerenciadoTarefas from './gerenciador-tarefas';

test('deve reinderizar projeto sem erros', () => {
  render(<GerenciadoTarefas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
