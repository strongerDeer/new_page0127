// features/ImageUpload/ImageUpload.ts

import { WrapStyle } from './ImageUpload.css';
import { ImageUploadProps } from './types';
import ImagePreview from './ImagePreview';
import useImageUpload from './useImageUpload';
import DeleteButton from './DeleteButton';
import FileInput from './FileInput';

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
      <FileInput
        id={id}
        ref={fileRef}
        onChange={handleChange}
        variant={variant}
      />
      <ImagePreview src={value} variant={variant} noImg={noImg} />
      {value && <DeleteButton onClick={handleDelete} />}
    </div>
  );
}
