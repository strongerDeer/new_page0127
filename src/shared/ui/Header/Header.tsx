import { cormorant } from '@shared/font';
import { ROUTES } from '@shared/lib/constants';
import Link from 'next/link';
import { headerWrap, logoStyle } from './Header.css';

export default function Header() {
  return (
    <header className={headerWrap}>
      <Link href={ROUTES.HOME} className={logoStyle}>
        <h1 className={cormorant.className}>
          page 0127<span>.</span>
        </h1>
      </Link>

      {/* prefetch 명시적 해제 */}
      <Link href={ROUTES.BOOK_SEARCH} prefetch={false}>
        SEARCH
      </Link>
      <Link href={'/book/1'}>BOOK 1</Link>
    </header>
  );
}
