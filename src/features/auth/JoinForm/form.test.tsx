import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { Form } from './form';

const user = userEvent.setup();
test('닉네임 입력란', async () => {
  render(<Form />);
  const textbox = screen.getByRole('textbox', { name: '닉네임' });
  const value = 'test123';
  await user.type(textbox, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test('비밀번호 입력란', async () => {
  render(<Form />);
  /*
      const textbox = screen.getByRole('textbox', { name: '비밀번호' });
      expect(textbox).toBeInTheDocument();

      input type='password'가 역할을 가지지 않기 때문에 테스트 코드 실패
  */

  /*
    요소 취득 테스트
      expect(() => screen.getByPlaceholderText('8자 이상')).not.toThrow();
      expect(() => screen.getByRole('textbox', { name: '비밀번호' })).toThrow();
  */

  const password = screen.getByPlaceholderText('8자 이상');
  const value = 'test123';

  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test('회원가입 버튼은 비활성화 상태다', () => {
  render(<Form />);
  expect(screen.getByRole('button', { name: '회원가입' })).toBeDisabled();
});

test('이용 약관에 동의하는 체크박스를 클릭하면 회원가입 버튼은 활성화 된다.', async () => {
  render(<Form />);
  await user.click(screen.getByRole('checkbox'));
  expect(screen.getByRole('button', { name: '회원가입' })).toBeEnabled();
});

test('form의 접근 가능한 이름은 heading에서 인용한다', () => {
  render(<Form />);

  expect(screen.getByRole('form', { name: '회원 가입' })).toBeInTheDocument();
});
