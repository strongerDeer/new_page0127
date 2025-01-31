import styles from './Container.module.scss';

export default function Container({
  tag = 'div',
  children,
  center,
}: {
  tag?: 'div' | 'main' | 'section' | 'article';
  children: React.ReactNode;
  center?: boolean;
}) {
  const TagName = tag;
  return (
    <TagName className={`${styles.container} ${center && 'center'}`}>
      {children}
    </TagName>
  );
}
