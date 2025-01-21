'use client';
import Search from '@shared/ui/Search/Search';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  return (
    <div>
      <Search query={q || ''} />
    </div>
  );
}
