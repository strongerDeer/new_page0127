import Link from 'next/link';
import { BookData } from './types';
import { ROUTES } from '@shared/lib/constants';
import Image from 'next/image';

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  frontCover,
  flipCover,
  author,
  publisher,
  pubDate,
  categoryName,
  category,
  page,
  price,
}: BookData) {
  return (
    <Link href={`${ROUTES.BOOK}/${id}`}>
      <Image src={frontCover} alt="" width={100} height={100} />
      <h3>{title}</h3>
      <p>{subTitle}</p>
      <p>{description}</p>
    </Link>
  );
}
