'use server';

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
  } catch (error) {
    console.log(error);
    return;
  }
}
