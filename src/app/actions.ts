'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateBookPage(bookId: string) {
  revalidatePath(`/book/${bookId}`);
  revalidatePath(`/book`);
}

export async function revalidateUserPage(userId: string) {
  revalidatePath(`/${userId}`);
}
