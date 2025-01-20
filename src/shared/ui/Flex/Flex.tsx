export default function Flex({
  tag = 'div',
  direction = 'row',
  alignItems = 'center',

  gap = '2rem',
  children,
}: {
  tag?: 'div';
  gap?: string;
  direction?: 'row' | 'column';
  alignItems?: 'center' | 'flex-end';
  children: React.ReactNode;
}) {
  const TagName = tag;
  return (
    <TagName
      style={{
        display: 'flex',
        flexDirection: direction,

        gap: gap,
      }}
    >
      {children}
    </TagName>
  );
}
