'use server';

import { ROUTES } from '@/shared/lib/constants';
import { revalidatePath } from 'next/cache';

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  // 예외처리
  if (!content || !author) return;

  try {
    const res = await fetch(``, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    });
    console.log(res.status);
    // revalidatePath 재검증
    // 오직 서버에서만 호출가능
    // 해당 경로 전체 재검증. 풀라우트 캐시 등 캐시 삭제, 전체 다시 불러옴.

    revalidatePath(`${ROUTES.BOOK}/${bookId}`);
  } catch (error) {
    console.log(error);
    return;
  }
}
