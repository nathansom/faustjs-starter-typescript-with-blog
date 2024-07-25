import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';
import { ReactNode } from 'react';

let cx = className.bind(styles);

export default function ContentWrapper({
  content,
  children,
  className,
}: {
  content?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article className={cx(["component", className])}>
      <div dangerouslySetInnerHTML={{ __html: content ?? "" }} />
      {children}
    </article>
  );
}
