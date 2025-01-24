'use client';
import { cormorant } from '@/shared/font';
import { ROUTES } from '@/lib/constants';
import Button from '@/shared/ui/Button';
import Container from '@/shared/ui/Container/Container';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();
  const nav = {
    back: () => router.back(),
    home: () => router.push(ROUTES.HOME),
  };

  useEffect(() => {
    // 프리패칭
    router.prefetch('/home');
  }, []);

  return (
    <Container tag="main">
      <h2 className={cormorant.className}>
        Not Found<span>.</span>
      </h2>
      <p>
        페이지가 존재하지 않습니다. 입력하신 주소가 정확한지 다시 한번 확인해
        주세요!
      </p>
      <div>
        <Button onClick={nav.back} variant="outline" label="이전 페이지" />
        <Button onClick={nav.home} label="메인 페이지" />
      </div>
    </Container>
  );
}
