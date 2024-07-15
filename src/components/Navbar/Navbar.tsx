import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import ValdemarasSinkeviciusCV from '../../assets/images/ValdemarasSinkevicius.pdf';
import styles from './Navbar.module.css';

const cx = classNames.bind(styles);

export function Navbar() {
  return (
    <nav className={cx('navbar__wrapper')}>
      <ul className={cx('navbar__container')}>
        <li>
          <h1>
            <NavLink to="/">
              <i className="fa-solid fa-code" aria-hidden="true" />
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
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
            <span className="sr-only"> LinkedIn</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://www.github.com/valsin132" target="_blank">
            <i className="fa-brands fa-square-github" aria-hidden="true" />
            <span className="sr-only"> Github</span>
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
