import { User } from '../model/types';

export type JoinFormData = Omit<User, 'createdAt' | 'updatedAt'>;

export interface JoinFormProps {
  formData: JoinFormData;
  isLoading: boolean;
  errors?: Record<string, string>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProfileImgChange: (value: string) => void;
  handleRadioChange: (value: string) => void;
}
