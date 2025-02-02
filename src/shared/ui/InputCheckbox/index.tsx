import Link from 'next/link';
import {
  CheckboxWrap,
  inputStyle,
  LabelStyle,
  linkStyle,
} from './InputCheckbox.css';
import Icon from '../Icon';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onlyLabel?: boolean;
  link?: string;
  checked?: boolean;
}
export default function InputCheckbox({
  id,
  label,
  required,
  onlyLabel,
  link,
  checked,
  ...rest
}: CheckboxProps) {
  return (
    <div key={id} className={CheckboxWrap}>
      <input
        id={id}
        className={inputStyle}
        type="checkbox"
        required={required}
        checked={checked}
        {...rest}
      />
      <label htmlFor={id} className={LabelStyle}>
        <Icon
          name={checked ? 'checkFill' : 'check'}
          color={checked ? 'var(--primary)' : 'gray'}
          size={20}
        />
        {required ? <span>필수</span> : !onlyLabel && <span>선택</span>}
        {label}
      </label>
      {link && (
        <Link
          href={link}
          className={linkStyle}
          target="_blank"
          rel="noopener noreferrer"
          // noopener:  target="_blank"로 열린 새 탭이 window.opener 객체를 통해 원래 페이지를 조작하는 것을 방지
          // noreferrer: 새 페이지로 이동할 때 HTTP Referer 헤더를 통해 이전 페이지의 URL 정보가 전송되는 것을 방지
        >
          보기
        </Link>
      )}
    </div>
  );
}
