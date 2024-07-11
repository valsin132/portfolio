import classNames from 'classnames/bind';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

export function Home() {
  return (
    <div className={cx('intro__container')}>
      <p className={cx('intro__header')}>
        Hi, my name is <span className={cx('intro__name')}>Valdemaras Sinkevicius.</span>
      </p>
      <h2 className={cx('intro__about')}>
        I develop and create the web, the front end of websites.
      </h2>
      <p className={cx('intro__tech')}>
        I&apos;m a developer specializing in HTML, CSS, JS, TS, React, user experience.
      </p>
    </div>
  );
}
