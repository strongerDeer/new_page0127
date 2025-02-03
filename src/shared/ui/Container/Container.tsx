import styles from './Container.module.scss';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  tag?: 'div' | 'main' | 'section' | 'article';
  children: React.ReactNode;
  center?: boolean;
}

export default function Container({
  tag = 'div',
  children,
  center,
  ...rest
}: ContainerProps) {
  const TagName = tag;
  return (
    <TagName className={`${styles.container} ${center && 'center'}`} {...rest}>
      {children}
    </TagName>
  );
}
