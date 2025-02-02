import { inputLabel, inputWrapper, requireStyle } from '../Input/Input.css';
import { inputStyle, LabelStyle, RadioWrap } from './InputRadioList.css';

interface Radio {
  id: string;
  label: string;
  value: string;
}

interface RadioListProps {
  required: boolean;
  title: string;
  name: string;
  radios: Radio[];
  value?: string;
  errorMsg?: string;
  onChange?: (value: string) => void;
}

export default function RadioList({
  required,
  name,
  radios,
  value,
  errorMsg,

  onChange,
  title,
}: RadioListProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={inputWrapper}>
      <p className={inputLabel()}>
        {title} {required && <span className={requireStyle}>필수</span>}
      </p>
      <div className={RadioWrap}>
        {radios.map(({ id, label, value: optionValue }: Radio) => (
          <div key={id}>
            <input
              id={id}
              className={inputStyle}
              type="radio"
              name={name}
              value={optionValue}
              checked={value === optionValue}
              onChange={handleChange}
              required={required}
            />
            <label htmlFor={id} className={LabelStyle}>
              {label}
            </label>
          </div>
        ))}
      </div>
      {errorMsg && <p>{errorMsg}</p>}
    </div>
  );
}
