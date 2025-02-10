'use server';

import { revalidateTag } from 'next/cache';
import { ActionState } from './create';

export default async function deleteReviewAction(
  _: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  const reviewId = formData.get('reviewId')?.toString();
  const bookId = formData.get('bookId')?.toString();

  if (!reviewId) {
    return {
      status: false,
      error: '삭제할 리뷰가 없습니다',
    };
  }

  try {
    const response = await fetch(``, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: '',
    };
  } catch (error) {
    return {
      status: false,
      error: `리뷰 삭제에 실패했습니다: ${error}`,
    };
  }
}
