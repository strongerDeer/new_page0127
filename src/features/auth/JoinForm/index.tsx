'use client';

import { JoinForm as UIForm } from './ui';
import useJoinForm from './useJoinForm';

export default function JoinForm() {
  const {
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    error,
    handleProfileImgChange,
    handleRadioChange,
  } = useJoinForm();

  return (
    <UIForm
      formData={formData}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isLoading={isLoading}
      error={error}
      handleProfileImgChange={handleProfileImgChange}
    />
  );
}
