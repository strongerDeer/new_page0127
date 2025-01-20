import { ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

import Button from '@shared/ui/Button/Button';
import Flex from '@shared/ui/Flex/Flex';
import Input from '@shared/ui/Input/Input';

import { JoinFormData } from '../model/useJoin';

interface JoinFormProps {
  formData: JoinFormData;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error?: string;
}

export function JoinForm({
  formData,
  isLoading,
  error,
  handleSubmit,
  handleChange,
}: JoinFormProps) {
  return (
    <form onSubmit={handleSubmit}>
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
        {/* id */}
        {/* 중복 확인필요 */}
        <Input
          name="id"
          label="아이디"
          value={formData.id}
          onChange={handleChange}
        />

        {/* 닉네임 */}
        <Input
          name="displayName"
          label="닉네임"
          value={formData.displayName}
          onChange={handleChange}
          placeholder=""
          maxLength={20}
        />

        {/* 소개 */}
        <Input
          name="intro"
          label="소개"
          value={formData.intro}
          onChange={handleChange}
          placeholder="독서를 하는 이유?(최대 100자)"
          maxLength={100}
        />

        {/* 올해의 목표 권수 */}
        <Input
          name="displayName"
          label="올해의 목표 권수"
          value={formData.goal || ''}
          onChange={handleChange}
          placeholder="한달 한권 12권은 어때요?"
        />
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
