'use client';

import { useActionState, useEffect, useRef } from 'react';
import deleteReviewAction from './actions/delete';

export default function DeleteButton({
  reviewId,
  bookId,
}: {
  reviewId: string;
  bookId: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input hidden name="reviewId" value={reviewId} />
      <input hidden name="bookId" value={bookId} />
      {/* 
        submit(): 폼 제출이 전부
      
        requestSubmit(): 제출 버튼이 클릭한 것처럼 동작
      폼의 내용이 검증되고 검증이 성경한 경우에만 폼이 제출
      */}
      <button
        onClick={() => formRef.current?.requestSubmit()}
        disabled={isPending}
      >
        {isPending ? '...' : '삭제하기'}
      </button>
    </form>
  );
}
