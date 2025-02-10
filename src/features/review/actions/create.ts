'use server';

import { revalidateTag } from 'next/cache';

export interface ActionState {
  status: boolean;
  error: string;
}

export async function createReviewAction(
  _: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  const bookId = formData.get('bookId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  // 예외처리
  if (!bookId || !content || !author) {
    return {
      status: false,
      error: '리뷰내용과 작성자를 입력해주세요',
    };
  }

  try {
    const response = await fetch(``, {
      method: 'POST',
      body: JSON.stringify({ bookId, content, author }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // revalidatePath 재검증
    // 오직 서버에서만 호출가능
    // 해당 경로 전체 재검증. 풀라우트 캐시 등 캐시 삭제, 전체 다시 불러옴.
    revalidateTag(`review-${bookId}`);
    return {
      status: true,
      error: '',
    };
  } catch (error) {
    return {
      status: false,
      error: `리뷰 저장에 실패했습니다: ${error}`,
    };
  }
}
