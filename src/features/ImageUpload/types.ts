// types.ts
export interface ImagePreviewProps {
  src: string;
  variant: 'circle' | 'rectangle';
  noImg?: boolean;
}

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'circle' | 'rectangle';
  label?: string;
}

export interface ImageUploadProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  variant?: 'circle' | 'rectangle';
  noImg?: boolean;
}
