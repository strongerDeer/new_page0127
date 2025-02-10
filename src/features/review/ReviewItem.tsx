import DeleteButton from './DeleteButton';

interface ReviewData {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  bookId: string;
}

export default function ReviewList({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData) {
  return (
    <div>
      <p> {content}</p>
      <p> {author}</p>
      <p> {new Date(createdAt).toLocaleDateString()}</p>
      <DeleteButton reviewId={id} bookId={bookId} />
    </div>
  );
}
