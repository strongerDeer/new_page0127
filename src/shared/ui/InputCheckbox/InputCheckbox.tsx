import { CheckboxWrap, inputStyle, LabelStyle } from './InputCheckbox.css';
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function InputCheckbox({
  id,
  label,
  required,
  ...rest
}: CheckboxProps) {
  return (
    <div key={id} className={CheckboxWrap}>
      <input
        id={id}
        className={inputStyle}
        type="checkbox"
        {...rest}
        required={required}
      />
      <label htmlFor={id} className={LabelStyle}>
        {required && <span>필수</span>} {label}
      </label>
    </div>
  );
}
