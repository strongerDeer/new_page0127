import Search from '@/shared/ui/Search/Search';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      <Search query={q || ''} />
    </div>
  );
}
