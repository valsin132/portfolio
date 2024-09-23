import classNames from 'classnames/bind';
import styles from './ContactForm.module.css';

const cx = classNames.bind(styles);

export function ContactForm() {
  return (
    <div>
      <form className={cx('formContainer')}>
        <h2>Send me a message. Let&apos;s have a chat!</h2>
        <div className={cx('formElement')}>
          <label htmlFor="name">
            Name
            <input type="text" id="name" placeholder="Your name.." required />
          </label>
        </div>
        <div className={cx('formElement')}>
          <label htmlFor="email">
            E-mail
            <input type="email" id="email" placeholder="Your email.." required />
          </label>
        </div>
        <div className={cx('formElement')}>
          <label htmlFor="message">
            Message
            <textarea id="message" placeholder="Your message.." required />
          </label>
        </div>
        <button type="submit" className={cx('formButton')}>
          Submit
        </button>
      </form>
    </div>
  );
}
