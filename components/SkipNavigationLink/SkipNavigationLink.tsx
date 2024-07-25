import classNames from 'classnames/bind';
import * as SELECTORS from '../../constants/selectors';
import styles from './SkipNavigationLink.module.scss';
import Link from 'next/link';

let cx = classNames.bind(styles);

export default function SkipNavigationLink() {
  return (
    <Link
      className={cx(['component', 'sr-only'])}
      href={`#${SELECTORS.MAIN_CONTENT_ID}`}
    >
      Skip To Main Content
    </Link>
  );
}
