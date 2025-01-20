import JoinForm from '@features/auth/JoinForm';
import Container from '@shared/ui/Container/Container';

export default function Page() {
  return (
    <Container tag="main">
      <h2>회원 가입</h2>
      <p>온라인 책장을 만들어 볼까요?</p>
      <JoinForm />
    </Container>
  );
}
