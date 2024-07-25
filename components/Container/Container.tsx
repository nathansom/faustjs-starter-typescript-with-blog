import { ReactNode } from 'react';
import styles from './Container.module.scss';
import className from 'classnames/bind';

let cx = className.bind(styles);

export default function Container({ children, className }: {children?: ReactNode, className?: string}) {
  return (
    <div className={cx(['component', className])}>
      {children}
    </div>
  );
}
