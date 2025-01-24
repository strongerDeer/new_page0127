// features/ImageUpload/DeleteButton.tsx

import Icon from '@/shared/ui/Icon';
import { CloseButtonStyle } from './DeleteButton.css';

export default function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className={CloseButtonStyle} onClick={onClick}>
      <Icon name="close" />
      <span>삭제</span>
    </button>
  );
}
