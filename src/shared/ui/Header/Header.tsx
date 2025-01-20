import { ROUTES } from '@shared/lib/constants';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href={ROUTES.HOME}>HOME</Link>

      {/* prefetch 명시적 해제 */}
      <Link href={ROUTES.BOOK_SEARCH} prefetch={false}>
        SEARCH
      </Link>
      <Link href={'/book/1'}>BOOK 1</Link>
    </div>
  );
}
