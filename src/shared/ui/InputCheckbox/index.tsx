import Link from 'next/link';
import { CheckboxWrap, inputStyle, LabelStyle } from './InputCheckbox.css';
import Icon from '../Icon';
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onlyLabel?: boolean;
  link?: string;
}
export default function InputCheckbox({
  id,
  label,
  required,
  onlyLabel,
  link,
  ...rest
}: CheckboxProps) {
  return (
    <div key={id} className={CheckboxWrap}>
      <input
        id={id}
        className={inputStyle}
        type="checkbox"
        required={required}
        {...rest}
      />
      <label htmlFor={id} className={LabelStyle}>
        <Icon name="check" />
        {required ? <span>필수</span> : !onlyLabel && <span>선택</span>}
        {label}
      </label>
      {link && <Link href={link}>보기</Link>}
    </div>
  );
}
