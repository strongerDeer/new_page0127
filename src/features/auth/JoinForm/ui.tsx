'use client';
import { useState } from 'react';

import Button from '@/shared/ui/Button/Button';
import Flex from '@/shared/ui/Flex/Flex';
import Input from '@/shared/ui/Input/Input';

import RadioList from '@/shared/ui/InputRadio/RadioList';
import CheckBoxList from '@/shared/ui/InputCheckbox/CheckBoxList';

import ImageUpload from '@/features/ImageUpload/ImageUpload';
import { JoinFormProps } from './types';

export function JoinForm({
  formData,
  isLoading,
  error,
  onSubmit,
  onChange,
  handleProfileImgChange,
  handleRadioChange,
}: JoinFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <ImageUpload
        id="profile"
        value={formData.photoURL}
        onChange={handleProfileImgChange}
      />

      <Flex direction="column">
        {/* id */}
        {/* 중복 확인필요 */}
        <Input
          name="id"
          label="아이디"
          value={formData.id}
          onChange={onChange}
        />

        <RadioList
          title="성별"
          name="sex"
          radios={[
            { id: 'male', value: 'male', label: '남성' },
            { id: 'female', value: 'female', label: '여성' },
          ]}
          value={formData.sex}
          onChange={handleRadioChange}
        />
        <Input
          name="birth"
          label="생년월일"
          value={formData.birth}
          onChange={onChange}
        />
        {/* 닉네임 */}
        <Input
          name="displayName"
          label="닉네임"
          value={formData.displayName}
          onChange={onChange}
          placeholder=""
          maxLength={20}
        />

        {/* 소개 */}
        <Input
          name="intro"
          label="소개"
          value={formData.intro || ''}
          onChange={onChange}
          placeholder="독서를 하는 이유?(최대 100자)"
          maxLength={100}
        />

        {/* 올해의 목표 권수 */}
        <Input
          name="goal"
          label="올해의 목표 권수"
          value={formData.goal || ''}
          onChange={onChange}
          placeholder="한달 한권 12권은 어때요?"
        />

        <CheckBoxList
          id="agree"
          text="약관 전체 동의"
          checks={[
            {
              label: '이용약관 동의',
              required: true,
            },
            {
              label: '개인정보 수집 및 이용동의',
              required: true,
            },
          ]}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <Button label="취소" type="button" variant="outline" />
          <Button
            label={isLoading ? '처리중...' : '회원가입'}
            type="submit"
            disabled={isLoading}
            full
          />
        </div>
      </Flex>
    </form>
  );
}
