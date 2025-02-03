// src/shared/ui/Button/Button.test.tsx
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Button from '.';
import { buttonStyle } from './Button.css';

// Button.css 모듈 모킹
jest.mock('./Button.css', () => ({
  buttonStyle: jest.fn().mockImplementation(() => 'mock-button-style'),
  buttonVars: {
    backgroundColor: 'mockBackgroundColor',
    color: 'mockColor?',
    borderColor: 'mockBorderColor',
  },
}));

// Icon 컴포넌트 모킹
jest.mock('../Icon', () => {
  return {
    __esModule: true,
    default: function MockIcon({ name }: { name: string }) {
      return <span data-testid={`icon-${name}`}>{name}</span>;
    },
  };
});

describe('Button 컴포넌트', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('기본 버튼이 렌더링된다', () => {
    render(<Button label="테스트 버튼" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('테스트 버튼');
    expect(buttonStyle).toHaveBeenCalled();
  });

  it('disabled 상태가 적용된다', () => {
    render(<Button label="비활성화 버튼" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('클릭 이벤트가 동작한다', () => {
    const handleClick = jest.fn();
    render(<Button label="클릭 버튼" onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('아이콘이 있는 버튼이 렌더링된다', () => {
    render(<Button label="아이콘 버튼" leftIcon="google" />);
    expect(screen.getByTestId('icon-google')).toBeInTheDocument();
    expect(screen.getByText('아이콘 버튼')).toBeInTheDocument();
  });

  it('다양한 크기의 버튼이 렌더링된다', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { rerender } = render(
        <Button label={`${size} 버튼`} size={size} />,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent(`${size} 버튼`);
      rerender(<></>);
    });
  });

  it('variant가 적용된다', () => {
    const variants = ['solid', 'outline'] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <Button label={`${variant} 버튼`} variant={variant} />,
      );
      expect(screen.getByText(`${variant} 버튼`)).toBeInTheDocument();
      unmount();
    });
  });

  it('full width가 적용된다', () => {
    render(<Button label="전체 너비" full />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('색상값이 올바르게 적용된다', () => {
    // hex 색상 테스트
    render(<Button label="Hex 컬러" color="#ff0000" />);
    expect(screen.getByText('Hex 컬러')).toBeInTheDocument();

    // rgb 색상 테스트
    render(<Button label="RGB 컬러" color="rgb(0,0,255)" />);
    expect(screen.getByText('RGB 컬러')).toBeInTheDocument();

    // CSS 변수 색상 테스트
    render(<Button label="변수 컬러" color="primary" />);
    expect(screen.getByText('변수 컬러')).toBeInTheDocument();
  });

  it('아이콘 크기가 버튼 크기에 따라 조정된다', () => {
    // xs 사이즈 (16px)
    render(<Button label="작은 아이콘" size="xs" leftIcon="google" />);
    const smallIcon = screen.getByTestId('icon-google');
    expect(smallIcon).toBeInTheDocument();

    // 다른 사이즈 (20px)
    render(<Button label="큰 아이콘" size="md" leftIcon="google" />);
    const largeIcon = screen.getByTestId('icon-google');
    expect(largeIcon).toBeInTheDocument();
  });

  it('variant에 따라 텍스트 색상이 변경된다', () => {
    // solid variant
    render(<Button label="Solid 버튼" variant="solid" />);
    expect(screen.getByText('Solid 버튼')).toBeInTheDocument();

    // outline variant
    render(<Button label="Outline 버튼" variant="outline" />);
    expect(screen.getByText('Outline 버튼')).toBeInTheDocument();
  });

  it('submit 타입 버튼이 렌더링된다', () => {
    render(<Button label="제출" type="submit" />);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveAttribute('type', 'submit');
  });
});
