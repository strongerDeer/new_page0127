'use client';
import { cormorant } from '@/shared/font';
import { ROUTES } from '@/lib/constants';
import Button from '@/shared/ui/Button';
import Container from '@/shared/ui/Container/Container';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Flex from '@/shared/ui/Flex/Flex';
import Title from '@/shared/ui/Title/Title';

export default function NotFound() {
  const router = useRouter();
  const nav = {
    back: () => router.back(),
    home: () => router.push(ROUTES.HOME),
  };

  useEffect(() => {
    // 프리패칭
    router.prefetch('/home');
  }, [router]);

  return (
    <Container tag="main">
      <Title
        variant="pageTitle"
        tag="h2"
        align="center"
        className={cormorant.className}
      >
        Not Found<span>.</span>
      </Title>

      <Flex align="center" margin="2rem 0 4rem">
        페이지가 존재하지 않습니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주세요!
      </Flex>
      <Flex>
        <Button
          onClick={nav.back}
          variant="outline"
          label="이전 페이지"
          leftIcon="left"
        />
        <Button onClick={nav.home} label="메인 페이지" leftIcon="home" />
      </Flex>
    </Container>
  );
}
