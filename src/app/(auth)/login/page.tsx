import { GoogleLoginButton } from '@/features/auth/GoogleLoginButton';
import Container from '@/shared/ui/Container/Container';
import Spacing from '@/shared/ui/Spacing/Spacing';
import Text from '@/shared/ui/Text/Text';
import Title from '@/shared/ui/Title/Title';

export default function page() {
  return (
    <Container tag="main" center>
      <Title tag="h2">안녕하세요: )</Title>
      <Text fontSize={28}>오늘도 당신의 페이지를 펼쳐보세요.</Text>
      <Spacing />
      <GoogleLoginButton />
    </Container>
  );
}
