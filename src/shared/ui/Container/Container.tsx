import styles from './Container.module.scss';

export default function Container({
  tag = 'div',
  children,
}: {
  tag?: 'div' | 'main' | 'section' | 'article';
  children: React.ReactNode;
}) {
  const TagName = tag;
  return <TagName className={styles.container}>{children}</TagName>;
}
