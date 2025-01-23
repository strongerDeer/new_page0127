export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // variant: 'outline' | 'underline';
  label?: string;
  state?: 'default' | 'error' | 'success';
  full?: boolean;
  value: string | number;
  errorMsg?: string;
  helperMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
