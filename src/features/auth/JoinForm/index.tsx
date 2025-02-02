'use client';

import { JoinForm as UIForm } from './ui';
import useJoinForm from './useJoinForm';

export default function JoinForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    errors,
    handleProfileImgChange,
    handleRadioChange,
    cancelJoin,
  } = useJoinForm();

  return (
    <UIForm
      cancelJoin={cancelJoin}
      formData={formData}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isLoading={isLoading}
      errors={errors}
      handleProfileImgChange={handleProfileImgChange}
      handleRadioChange={handleRadioChange}
    />
  );
}
