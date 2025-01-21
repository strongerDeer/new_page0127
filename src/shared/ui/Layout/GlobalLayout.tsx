import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
