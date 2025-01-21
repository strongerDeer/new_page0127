import { render, screen } from '@testing-library/react';
import BookList from './BookList';
import { BookData } from '../BookItem/types';

export const books: BookData[] = [
  {
    id: 'string',
    title: '',
    subTitle: '',
    frontCover: 'string',
    flipCover: 'string',
    author: 'string',
    publisher: 'string',
    pubDate: 'string',
    description: 'string',
    categoryName: 'string',
    category: 'string',
    page: 100,
    price: 10000,
    readDate: 'string',
    memo: 'string',
    grade: 'string',
    grade10Count: 0,
    readUser: ['string', 'string'],
    readUserCount: 0,
    likeUsers: ['string', 'string'],
    lastUpdatedTime: 'string',
  },
  {
    id: 'adgag',
    title: '',
    subTitle: '',
    frontCover: 'string',
    flipCover: 'string',
    author: 'string',
    publisher: 'string',
    pubDate: 'string',
    description: 'string',
    categoryName: 'string',
    category: 'string',
    page: 100,
    price: 10000,
    readDate: 'string',
    memo: 'string',
    grade: 'string',
    grade10Count: 0,
    readUser: ['string', 'string'],
    readUserCount: 0,
    likeUsers: ['string', 'string'],
    lastUpdatedTime: 'string',
  },
];

test('책의 수만큼 목록을 표시한다', () => {
  render(<BookList books={books} />);
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

test('목록을 표시한다', () => {
  render(<BookList books={books} />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

test('책의 수만큼 목록을 표시한다', () => {
  render(<BookList books={books} />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(2);
});

test('목록에 표시할 데이터가 없으면 "게재된 도서가 없습니다"를 표시한다', () => {
  render(<BookList books={[]} />);
  //queryByRole: 존재하지 않을 것으로 예상하는 요소의 취득 시도
  const list = screen.queryByRole('list');
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull(); // null 이다.
  expect(screen.getByText('게재된 도서가 없습니다')).toBeInTheDocument();
});
