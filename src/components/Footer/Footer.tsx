import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const cx = classNames.bind(styles);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cx('footer__wrapper')}>
      <ul className={cx('footer__container')}>
        <li>
          <NavLink to="https://linkedin.com/in/valdemaras-sinkevicius-a5832b2aa" target="_blank">
            <FaLinkedin />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.github.com/valsin132" target="_blank">
            <FaGithubSquare />
          </NavLink>
        </li>
        <li>
          <NavLink to="mailto:valdemarassinkevicius@gmail.com">
            <FaEnvelope />
          </NavLink>
        </li>
      </ul>
      <p>
        <small>&copy; {currentYear} Valdemaras Sinkevicius. All rights reserved.</small>
      </p>
    </footer>
  );
}
