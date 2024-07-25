import classNames from 'classnames/bind';
import * as SELECTORS from '../../constants/selectors';
import styles from './Main.module.scss';
import { ReactNode } from 'react';

let cx = classNames.bind(styles);

export default function Main({ children, className, ...props }: {children?: ReactNode, className?: string, props?: any}) {
  return (
    <main
      id={SELECTORS.MAIN_CONTENT_ID}
      tabIndex={-1}
      className={cx(['component', className])}
      {...props}
    >
      {children}
    </main>
  );
}
