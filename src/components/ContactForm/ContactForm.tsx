import emailjs from 'emailjs-com';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
const cx = classNames.bind(styles);

export function ContactForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs.sendForm(serviceId, templateId, form, publicKey).then(
      () => {
        setMessage('Message sent successfully!');
        setError(null);
        form.reset();
      },
      () => {
        setError('Something went wrong!');
        setMessage(null);
      }
    );
  };

  return (
    <div className={cx('form__wrapper')}>
      <form className={cx('form__container')} onSubmit={handleSubmit}>
        <h2 className={cx('form__heading')}>Get in touch!</h2>
        <div className={cx('form__element')}>
          <label htmlFor="from_name">
            Name
            <input type="text" id="from_name" name="from_name" placeholder="Your name" required />
          </label>
        </div>
        <div className={cx('form__element')}>
          <label htmlFor="from_email">
            E-mail
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Your e-mail"
              required
            />
          </label>
        </div>
        <div className={cx('form__element')}>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" placeholder="Your message" required />
          </label>
        </div>
        <button type="submit" className={cx('form__button')}>
          Submit
        </button>
        {message && <p className={cx('form__success-msg')}>{message}</p>}
        {error && <p className={cx('form__error-msg')}>{error}</p>}
      </form>
    </div>
  );
}
