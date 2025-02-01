import { cormorant } from '@/shared/font';
import { ROUTES } from '@/lib/constants';
import Link from 'next/link';
import { headerWrap, logoStyle, right } from './Header.css';

export default function Header() {
  return (
    <header className={headerWrap}>
      <Link href={ROUTES.HOME} className={logoStyle}>
        <h1 className={cormorant.className}>
          page 0127<span>.</span>
        </h1>
      </Link>

      <div className={right}>
        <Link href={ROUTES.BOOK_SEARCH}>SEARCH</Link>
        <Link href={'/book/a'}>BOOK A</Link>
        <Link href={ROUTES.LOGIN}>시작하기</Link>
      </div>
    </header>
  );
}
