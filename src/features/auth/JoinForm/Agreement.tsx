import Link from 'next/link';

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Agreement({ onChange }: Props) {
  return (
    <fieldset>
      <legend>이용 약관 동의</legend>
      <label>
        <input type="checkbox" onChange={onChange} />
        서비스&nbsp;<Link href="#">이용 약관</Link>을 확인했으며 이에 동의합니다
      </label>
    </fieldset>
  );
}
