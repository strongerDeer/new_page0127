import { useActionState, useEffect } from 'react';
import { createReviewAction } from './create-review.action';

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && state.status === false) {
      // 실패시
      alert(state.error);
    }
  }, [state]);
  return (
    <section>
      <form action={formAction}>
        <input hidden name="bookId" value={bookId} readOnly />
        <textarea
          name="content"
          placeholder="리뷰 내용"
          required
          disabled={isPending}
        />
        <input
          name="author"
          placeholder="작성자"
          required
          disabled={isPending}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? '...작성중' : '작성하기'}
        </button>
      </form>
    </section>
  );
}
