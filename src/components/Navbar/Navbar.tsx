import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import ValdemarasSinkeviciusCV from '../../assets/images/ValdemarasSinkevicius.pdf';
import styles from './Navbar.module.css';

const cx = classNames.bind(styles);

export function Navbar() {
  return (
    <nav className={cx('navbar__wrapper')}>
      <ul className={cx('navbar__container')}>
        <li className={cx('navbar__logo')}>
          <h1>
            <NavLink to="/">
              <FaCode className={cx('navbar__code-icon')} />
              <span className={cx('navbar__name')}> Valdemaras Sinkevicius</span>
            </NavLink>
          </h1>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="https://linkedin.com/in/valdemaras-sinkevicius-a5832b2aa" target="_blank">
            <FaLinkedin className={cx('navbar__linkedin-icon')} />
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.github.com/valsin132" target="_blank">
            <FaGithubSquare className={cx('navbar__github-icon')} />
          </NavLink>
        </li>
        <li>
          <button
            className={cx('navbar__cv-btn')}
            type="button"
            onClick={() => window.open(ValdemarasSinkeviciusCV)}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}
