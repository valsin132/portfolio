import classNames from 'classnames/bind';
import { Card } from '../../components/Card';
import lunchApp from '../../assets/images/lunchApp.png';
import styles from './Projects.module.css';

const cx = classNames.bind(styles);

export function Projects() {
  return (
    <div>
      <h2 className={cx('projects-heading')}>Projects I&apos;m proud of</h2>
      <Card
        title="Lunch-app"
        description="Project is setup using Vite (React / TypeScript), PostCSS, Jest, React Testing Library."
        technologiesHeading="Technologies used include:"
        technologies="HTML, PostCSS, Vite ( REACT / TypeScript )"
        img={lunchApp}
        isLink
        link="https://github.com/valsin132/Lunch-app"
      />
    </div>
  );
}
