import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const cx = classNames.bind(styles);

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={cx('not-found-page__content')}>
      <p className={cx('not-found-page__header')}>Oops!</p>
      <h1>Page not found!</h1>
      <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <button type="button" onClick={() => navigate('/')}>
        Go to Home page
      </button>
    </div>
  );
}
