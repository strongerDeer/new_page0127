import Link from 'next/link';
import { BookData } from './types';
import { ROUTES } from '@/lib/constants';

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  // frontCover,
  // flipCover,
  // author,
  // publisher,
  // pubDate,
  // categoryName,
  // category,
  // page,
  // price,
}: BookData) {
  return (
    <div>
      {/* <Image src={frontCover} alt="" width={100} height={100} /> */}
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <p>{description}</p>
      <Link href={`${ROUTES.BOOK}/${id}`}>더 알아보기</Link>
    </div>
  );
}
