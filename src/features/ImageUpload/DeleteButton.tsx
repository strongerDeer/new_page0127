// features/ImageUpload/DeleteButton.tsx

import Icon from '@/shared/ui/Icon/Icon';
import { CloseButtonStyle } from './DeleteButton.css';

export default function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className={CloseButtonStyle} onClick={onClick}>
      <Icon name="close" />
      <span className="a11y-hidden">삭제</span>
    </button>
  );
}
