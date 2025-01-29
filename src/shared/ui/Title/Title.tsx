import { TitleStyle } from './Title.css';

export default function Title({
  tag = 'h2',
  children,
  align = 'left',
  margin,
  className,
  variant,
}: {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  align?: 'center' | 'left';
  margin?: number;
  className?: string;
  variant?: 'pageTitle';
}) {
  const TagName = tag;
  return (
    <TagName
      className={`${TitleStyle({ align, variant })} ${className}`}
      style={{
        margin: `${margin}rem 0`,
      }}
    >
      {children}
    </TagName>
  );
}
