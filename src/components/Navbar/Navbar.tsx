import classNames from 'classnames/bind';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare, FaBars, FaTimes } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import ValdemarasSinkeviciusCV from '../../assets/images/ValdemarasSinkevicius.pdf';
import styles from './Navbar.module.css';

const cx = classNames.bind(styles);

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setIsActive(!isActive);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setIsActive(false);
  };

  return (
    <nav className={cx('navbar__wrapper')}>
      <h1 className={cx('navbar__logo')}>
        <NavLink to="/" onClick={handleMenuItemClick}>
          <FaCode className={cx('navbar__code-icon')} />
          <span className={cx('navbar__name')}> Valdemaras Sinkevicius</span>
        </NavLink>
      </h1>
      <ul className={cx('navbar__container', { 'navbar__burger-open': menuOpen })}>
        <li>
          <NavLink to="/projects" onClick={handleMenuItemClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleMenuItemClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://linkedin.com/in/valdemaras-sinkevicius-a5832b2aa"
            onClick={handleMenuItemClick}
            target="_blank">
            <FaLinkedin className={cx('navbar__linkedin-icon')} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://www.github.com/valsin132"
            onClick={handleMenuItemClick}
            target="_blank">
            <FaGithubSquare className={cx('navbar__github-icon')} />
          </NavLink>
        </li>
        <li>
          <button
            className={cx('navbar__cv-btn')}
            type="button"
            onClick={() => {
              window.open(ValdemarasSinkeviciusCV);
              handleMenuItemClick();
            }}>
            Resume
          </button>
        </li>
      </ul>
      <button
        className={cx('navbar__burger-btn')}
        onClick={handleMenuToggle}
        type="button"
        aria-label="open menu">
        {isActive ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
