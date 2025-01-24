import InputCheckbox from './InputCheckbox';
import { Fragment } from 'react';
import { WrapStyle } from './InputCheckboxList.css';

interface Checks {
  id: string;
  title: string;
  link?: string;
  mandatory: boolean;
  checked?: boolean;
}
export default function InputCheckboxList({
  checks,
  id,
  text,
  checked,
  handleAgreement,
  handleAllAgreement,
}: {
  id: string;
  text: string;
  checks: Checks[];
  checked: boolean;
  handleAgreement: (id: string, checked: boolean) => void;
  handleAllAgreement: (checked: boolean) => void;
}) {
  return (
    <div className={WrapStyle}>
      <InputCheckbox
        name={id}
        id={id}
        label={text}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleAllAgreement(e.target.checked);
        }}
        onlyLabel
      />
      {checks.map(({ id, title, mandatory, link, checked }: Checks, index) => (
        <Fragment key={id}>
          <InputCheckbox
            key={id + index}
            name={id + index}
            id={id}
            label={title}
            required={mandatory}
            checked={checked}
            link={link}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleAgreement(id, e.target.checked);
            }}
          />
        </Fragment>
      ))}
    </div>
  );
}
