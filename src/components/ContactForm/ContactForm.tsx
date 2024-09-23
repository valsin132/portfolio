import classNames from 'classnames/bind';
import styles from './ContactForm.module.css';

const cx = classNames.bind(styles);

export function ContactForm() {
  return (
    <div className={cx('form__wrapper')}>
      <form className={cx('form__container')}>
        <h2 className={cx('form__heading')}>Get in touch!</h2>
        <div className={cx('form__element')}>
          <label htmlFor="name">
            Name
            <input type="text" id="name" placeholder="Your name" required />
          </label>
        </div>
        <div className={cx('form__element')}>
          <label htmlFor="email">
            E-mail
            <input type="email" id="email" placeholder="Your e-mail" required />
          </label>
        </div>
        <div className={cx('form__element')}>
          <label htmlFor="message">
            Message
            <textarea id="message" placeholder="Your message" required />
          </label>
        </div>
        <button type="submit" className={cx('form__button')}>
          Submit
        </button>
      </form>
    </div>
  );
}
