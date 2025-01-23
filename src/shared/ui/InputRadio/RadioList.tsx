import { inputStyle, LabelStyle, RadioWrap } from './RadioList.css';

interface Radio {
  id: string;
  label: string;
  value: string;
}

interface RadioListProps {
  title: string;
  name: string;
  radios: Radio[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function RadioList({
  name,
  radios,
  value,
  onChange,
  title,
}: RadioListProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div>
      <p>{title}</p>
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
            />
            <label htmlFor={id} className={LabelStyle}>
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
