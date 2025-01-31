import { TextStyle } from './Text.css';

export default function Text({
  tag = 'p',
  fontSize = 16,
  children,
  align = 'left',
  margin,
  className,
}: {
  fontSize?: 14 | 16 | 24 | 28 | 32;
  tag?: 'p';
  children: React.ReactNode;
  align?: 'center' | 'left';
  margin?: string;
  className?: string;
}) {
  const TagName = tag;
  return (
    <TagName
      className={`${TextStyle({ align, fontSize })} ${className}`}
      style={{
        margin: margin,
      }}
    >
      {children}
    </TagName>
  );
}
