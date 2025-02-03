import { render } from '@testing-library/react';
import Icon, { getIconOptions, ICONS } from '.';

describe('Icon 컴포넌트', () => {
  it('기본 아이콘이 기본크기(16)로렌더링 된다', () => {
    render(<Icon name="google" />);
    const icon = document.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '16');
    expect(icon).toHaveAttribute('height', '16');
  });

  it('설정한 크기로 아이콘이 렌더링된다', () => {
    const size = 32;
    render(<Icon name="google" size={size} />);
    const icon = document.querySelector('svg');
    expect(icon).toHaveAttribute('width', size.toString());
    expect(icon).toHaveAttribute('height', size.toString());
  });

  it('설정한 색상으로 아이콘이 렌더링된다', () => {
    const color = 'red';
    render(<Icon name="google" color={color} />);
    const icon = document.querySelector('svg');
    expect(icon).toHaveAttribute('color', color);
  });

  it('존재하지 않는 아이콘 이름으로 렌더링하면 null을 반환한다', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { container } = render(<Icon name="non-existent" />);
    expect(container).toBeEmptyDOMElement();
  });

  it('모든 아이콘 옵션을 가져올 수 있다', () => {
    const iconOptions = getIconOptions();
    /*
      export const getIconOptions = () => {
        return Object.keys(ICONS);
      };
    */
    expect(Array.isArray(iconOptions)).toBe(true); // iconOptions가 배열인지 확인
    expect(iconOptions.length).toBeGreaterThan(0); // 배열의 길이가 0보다 큰지, 비어있는지 확인, 최소 하나는 있어야함

    // 배열에 포함 여부 확인
    expect(iconOptions).toContain('google');
    expect(iconOptions).toContain('heart');
  });

  describe('각각의 아이콘이 정상적으로 렌더링된다', () => {
    getIconOptions().forEach((iconName) => {
      it(`${iconName} 아이콘이 렌더링된다`, () => {
        render(<Icon name={iconName as keyof typeof ICONS} />);
        const icon = document.querySelector('svg');
        expect(icon).toBeInTheDocument();
      });
    });
  });
});
