import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // variant: 'outline' | 'underline';
  label?: string;
  state?: 'default' | 'error' | 'success';
  full?: boolean;
  errorMsg?: string;
}
