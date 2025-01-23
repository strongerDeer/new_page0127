// features/ImageUpload/useImageUpload.ts
import { useRef } from 'react';

export default function useImageUpload({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        onChange(e.target?.result as string);
      };
    }
  };

  const handleDelete = () => {
    if (fileRef.current) fileRef.current.value = '';
    onChange('');
  };

  return { handleChange, fileRef, handleDelete };
}
