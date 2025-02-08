import { createReviewAction } from './create-review.action';

export default function ReviewEditor({ bookId }: { bookId: string }) {
  return (
    <section>
      <form action={createReviewAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea name="content" placeholder="리뷰 내용" required />
        <input name="author" placeholder="작성자" required />
        <button type="submit">작성하기</button>
      </form>
    </section>
  );
}
