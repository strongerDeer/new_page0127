import { GoogleLoginButton } from '@features/auth/GoogleLoginButton';
import Container from '@shared/ui/Container/Container';

export default function page() {
  return (
    <Container tag="main">
      <h2>안녕하세요: )</h2>
      <p>오늘도 당신의 페이지를 펼쳐보세요.</p>
      <GoogleLoginButton />
    </Container>
  );
}
