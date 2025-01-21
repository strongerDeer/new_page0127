import { render, screen } from '@testing-library/react';

import { BookData } from '../BookItem/types';
import BookItem from './BookItem';

export const book: BookData = {
  id: 'id1234',
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
};

test('링크에 id로 만든 URL을 표시한다', () => {
  render(<BookItem {...book} />);
  expect(screen.getByRole('link', { name: '더 알아보기' })).toHaveAttribute(
    'href',
    '/book/id1234',
  );
});
