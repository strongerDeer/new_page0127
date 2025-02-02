'use client';
import { JoinFormProps } from './types';

import ImageUpload from '@/features/ImageUpload';
import Terms from '@/features/terms/ui';

import Button from '@/shared/ui/Button';
import Flex from '@/shared/ui/Flex/Flex';
import Input from '@/shared/ui/Input';
import InputRadioList from '@/shared/ui/InputRadioList';

export function JoinForm({
  formData,
  isLoading,
  errors,
  onSubmit,
  onChange,
  handleProfileImgChange,
  handleRadioChange,
  cancelJoin,
}: JoinFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <ImageUpload
        id="profile"
        value={formData.photoURL || ''}
        onChange={handleProfileImgChange}
      />

      <Flex direction="column" gap="2rem">
        {/* id */}
        {/* 중복 확인필요 */}
        <Input
          name="userId"
          label="아이디"
          value={formData.userId}
          onChange={onChange}
          state={errors?.userId ? 'error' : 'default'}
          errorMsg={errors?.userId}
          required
        />

        <InputRadioList
          title="성별"
          name="sex"
          radios={[
            { id: 'male', value: 'male', label: '남성' },
            { id: 'female', value: 'female', label: '여성' },
          ]}
          value={formData.sex || ''}
          onChange={handleRadioChange}
          errorMsg={errors?.sex}
          required
        />
        <Input
          name="birth"
          label="생년월일(6자리)"
          value={formData.birth}
          onChange={onChange}
          placeholder="YYMMDD"
          state={errors?.birth ? 'error' : 'default'}
          errorMsg={errors?.birth}
          required
        />
        {/* 닉네임 */}
        <Input
          name="displayName"
          label="닉네임"
          value={formData.displayName}
          onChange={onChange}
          placeholder=""
          maxLength={20}
          state={errors?.displayName ? 'error' : 'default'}
          errorMsg={errors?.displayName}
          required
        />

        {/* 소개 */}
        {/* <Input
          name="bio"
          label="소개"
          value={formData.bio || ''}
          onChange={onChange}
          placeholder="독서를 하는 이유?(최대 100자)"
          maxLength={10}
          state={errors?.bio ? 'error' : 'default'}
          errorMsg={errors?.bio}
        /> */}

        {/* 올해의 목표 권수 */}
        {/* <Input
          type="number"
          name="goal"
          label="올해의 목표 권수"
          value={formData.goal || ''}
          onChange={onChange}
          placeholder="한달 한권 12권은 어때요?"
          state={errors?.goal ? 'error' : 'default'}
          errorMsg={errors?.goal}
          min={1}
          max={1000}
        /> */}
        <Terms />
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
        <Flex basis="2:8">
          <Button
            label="취소"
            type="button"
            variant="outline"
            onClick={cancelJoin}
          />

          <Button
            label={isLoading ? '처리중...' : '회원가입'}
            type="submit"
            disabled={isLoading}
          />
        </Flex>
      </Flex>
    </form>
  );
}
