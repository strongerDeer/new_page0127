'use client';
import Button from '@/shared/ui/Button';
import Container from '@/shared/ui/Container/Container';
import Icon from '@/shared/ui/Icon';

import Title from '@/shared/ui/Title/Title';
import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <Container center style={{ textAlign: 'center' }}>
      <Title tag="h2" align="center" margin={2}>
        <Icon name="error" size={60} color="error" />
        <br />
        오류가 발생했습니다.
      </Title>

      <Button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
        leftIcon="reset"
        label="다시시도"
        variant="outline"
      />
    </Container>
  );
}
