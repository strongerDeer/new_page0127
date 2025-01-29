export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>검색input 영역</div>
      {children}
    </>
  );
}
