import { User } from '../model/types';

export type JoinFormData = Omit<User, 'createdAt' | 'updatedAt'>;

export interface JoinFormProps {
  formData: JoinFormData;
  isLoading: boolean;
  error?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProfileImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
