import { FlexStyle } from './Flex.css';

export default function Flex({
  tag = 'div',
  direction = 'row',
  gap,
  children,
  basis,
}: {
  tag?: 'div';
  gap?: string;
  direction?: 'row' | 'column';
  alignItems?: 'center' | 'flex-end';
  children: React.ReactNode;
  basis?: string;
}) {
  const TagName = tag;
  return (
    <TagName
      className={FlexStyle({ basis })}
      style={{
        flexDirection: direction,
        gap: gap,
      }}
    >
      {children}
    </TagName>
  );
}
