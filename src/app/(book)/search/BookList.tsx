'use client';
import delay from '@/shared/util/delay';
import useSearchBook from './useSearchBook';

export default function BookList({ keyword }: { keyword: string }) {
  delay(1000);
  const { data } = useSearchBook({ keyword });

  console.log(data);
  return (
    <div>
      {/* {data?.map((book) => <div key={book.id}>{book.title}</div>)} */}
      {data?.length}
    </div>
  );
}
