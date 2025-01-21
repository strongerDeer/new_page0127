import { ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

import { JoinFormData } from '../model/useJoin';
import Flex from '@/shared/ui/Flex/Flex';
import Button from '@/shared/ui/Button/Button';

interface JoinFormProps {
  formData: JoinFormData;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading?: boolean;
  error?: string;
}

export function JoinForm({
  formData,
  isLoading,
  error,
  handleSubmit,
}: JoinFormProps) {
  return (
    <form onSubmit={handleSubmit} role="form">
      {/* 프로필 이미지 */}
      {formData.photoURL && (
        <Image
          src={formData.photoURL}
          width={200}
          height={200}
          alt="프로필 이미지"
          className="rounded-full"
        />
      )}

      <Flex direction="column">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          label={isLoading ? '처리중...' : '회원가입'}
          type="submit"
          disabled={isLoading}
          full
        />
      </Flex>
    </form>
  );
}
