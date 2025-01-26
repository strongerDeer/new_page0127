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
        <Link href={link} className={linkStyle}>
          보기
        </Link>
      )}
    </div>
  );
}
