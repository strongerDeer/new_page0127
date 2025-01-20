import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('이름을 표시한다', () => {
  render(<Form name="heyjin" onSubmit={() => {}} />);
  expect(screen.getByText('heyjin')).toBeInTheDocument();
});

test('버튼을 표시한다', () => {
  render(<Form name="heyjin" onSubmit={() => {}} />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
test('heading을 표시한다', () => {
  render(<Form name="heyjin" />);
  expect(screen.getByRole('heading')).toHaveTextContent('회원 가입');
});

test('버튼을 클릭하면 이벤트 핸들러가 실행된다', () => {
  const mockFn = jest.fn();
  render(<Form name="heyjin" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockFn).toHaveBeenCalled();
});
