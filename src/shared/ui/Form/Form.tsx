type Props = {
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ name, onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e?.preventDefault();
        onSubmit?.(e);
      }}
    >
      <h2>회원 가입</h2>
      <p>{name}</p>
      {/* <Button label="수정" /> */}
      <button type="submit"> 수정 </button>
    </form>
  );
}
