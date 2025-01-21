import BookItem from '../BookItem/BookItem';
import { BookData } from '../BookItem/types';

type Props = {
  books: BookData[];
};
export default function BookList({ books }: Props) {
  return (
    <div>
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <BookItem {...book} />
            </li>
          ))}
        </ul>
      ) : (
        <p>게재된 도서가 없습니다</p>
      )}
    </div>
  );
}
