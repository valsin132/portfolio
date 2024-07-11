import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const cx = classNames.bind(styles);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cx('footer__wrapper')}>
      <ul className={cx('footer__container')}>
        <li>
          <NavLink to="https://linkedin.com/in/valdemaras-sinkevicius-a5832b2aa" target="_blank">
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.github.com/valsin132" target="_blank">
            <i className="fa-brands fa-square-github" aria-hidden="true" />
            <span className="sr-only">Github</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="mailto:valdemarassinkevicius@gmail.com">
            <i className="fa-solid fa-envelope" aria-hidden="true" />
            <span className="sr-only">Email</span>
          </NavLink>
        </li>
      </ul>
      <p>
        <small>&copy; {currentYear} Valdemaras Sinkevicius. All rights reserved.</small>
      </p>
    </footer>
  );
}
