import { FlexStyle } from './Flex.css';

export default function Flex({
  tag = 'div',
  direction = 'row',
  gap,
  children,
  basis,
  align,
  margin,
}: {
  tag?: 'div';
  gap?: string;
  direction?: 'row' | 'column';
  alignItems?: 'center' | 'flex-end';
  children: React.ReactNode;
  basis?: '2:8';
  align?: 'center' | 'left';
  margin?: string;
}) {
  const TagName = tag;
  return (
    <TagName
      className={FlexStyle({ basis, align })}
      style={{
        flexDirection: direction,
        gap: gap,
        margin: margin,
      }}
    >
      {children}
    </TagName>
  );
}
