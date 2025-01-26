// SSR 렌더링
export const dynamicParams = false;
// true(기본값): 포함되지 않은 동적 세그먼트는 generateStaticParams요구에 따라 생성
// false: 동적 세그먼트가 포함되지 않으면 generateStaticParams404가 반환
export async function generateStaticParams() {
  return [{ bookId: 'a' }, { bookId: 'b' }];
}

// ISR 렌더링: 초단위
// export const revalidate = 60;

// On-Demand ISR (요청을 받을때마다 페이지 생성)

export default async function Page({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) {
  const bookId = (await params).bookId;
  return <div>Book 상세 {bookId}</div>;
}
