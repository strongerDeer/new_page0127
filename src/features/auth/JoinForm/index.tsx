'use client';

import useJoin from '../model/useJoin';
import { JoinForm as UIForm } from './ui';

export default function JoinForm() {
  const { formData, isLoading, error, handleSubmit, handleChange } = useJoin();

  return (
    <UIForm
      formData={formData}
      isLoading={isLoading}
      error={error}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}
