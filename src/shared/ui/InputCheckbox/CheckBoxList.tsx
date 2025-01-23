import Checkbox from './InputCheckbox';
import InputCheckbox from './InputCheckbox';

interface Checks {
  label: string;
  required: boolean;
}
export default function CheckBoxList({
  checks,
  id,
  text,
}: {
  id: string;
  text: string;
  checks: Checks[];
}) {
  return (
    <div>
      <Checkbox name={id} id={id} label={text} />
      {checks.map(({ label, required }: Checks, index) => (
        <InputCheckbox
          key={id + index}
          name={id + index}
          id={id}
          label={label}
          required={required}
        />
      ))}
    </div>
  );
}
