// features/ImageUpload/ImagePreview.tsx
import Image from 'next/image';
import { ImagePreviewProps } from './types';
import { NO_PROFILE } from '@/shared/lib/constants';
import { PreviewStyle } from './ImagePreview.css';

export default function ImagePreview({
  src,
  variant,
  noImg,
}: ImagePreviewProps) {
  if (noImg && !src) {
    <div className={PreviewStyle({ variant })}>이미지 없음</div>;
  }

  return (
    <Image
      className={PreviewStyle({ variant })}
      src={src ? src : NO_PROFILE}
      width={120}
      height={120}
      alt=""
      priority
      loading="eager"
      fetchPriority="high"
    />
  );
}
