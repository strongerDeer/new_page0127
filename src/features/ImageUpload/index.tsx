// features/ImageUpload/ImageUpload.ts

import { WrapStyle } from './ImageUpload.css';
import { ImageUploadProps } from './types';
import ImagePreview from './ImagePreview';
import useImageUpload from './useImageUpload';

import FileInput from './FileInput';
import DeleteButton from '@/shared/ui/DeleteButton/DeleteButton';

export default function ImageUpload({
  value,
  onChange,
  variant = 'circle',
  noImg,
  id,
}: ImageUploadProps) {
  const { handleChange, fileRef, handleDelete } = useImageUpload({
    onChange,
  });

  return (
    <div className={WrapStyle({ variant })}>
      <ImagePreview src={value} variant={variant} noImg={noImg} />
      {value ? (
        <DeleteButton onClick={handleDelete} />
      ) : (
        <FileInput
          id={id}
          ref={fileRef}
          onChange={handleChange}
          variant={variant}
        />
      )}
    </div>
  );
}
