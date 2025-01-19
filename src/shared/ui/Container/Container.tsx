import styles from './Container.module.scss';

export default function Container({
  tag,
  children,
}: {
  tag: 'div' | 'main' | 'section' | 'article';
  children: React.ReactNode;
}) {
  const TagName = tag || 'div';
  return <TagName className={styles.container}>{children}</TagName>;
}
