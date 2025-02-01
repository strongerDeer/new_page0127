import JoinForm from '@/features/auth/JoinForm';
import Container from '@/shared/ui/Container/Container';
import Spacing from '@/shared/ui/Spacing/Spacing';
import Text from '@/shared/ui/Text/Text';
import Title from '@/shared/ui/Title/Title';

export default function Page() {
  return (
    <Container tag="main">
      <Title tag="h2">회원 가입</Title>
      <Text fontSize={28}>나만의 온라인 책장을 만들어 보세요</Text>
      <Spacing height={40} />
      <JoinForm />
    </Container>
  );
}
