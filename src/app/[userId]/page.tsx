import { notFound } from 'next/navigation';
import { getUserIds } from './getUser';
import Profile from './Profile';

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await getUserIds();
  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  if (!userId) notFound();

  return <Profile userId={userId} />;
}
