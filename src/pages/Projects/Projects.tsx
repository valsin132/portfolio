import classNames from 'classnames/bind';
import { Card } from '../../components/Card';
import lunchApp from '../../assets/images/lunchApp.png';
import todoApp from '../../assets/images/todoApp.png';
import styles from './Projects.module.css';

const cx = classNames.bind(styles);

export function Projects() {
  return (
    <div>
      <h2 className={cx('projects-heading')}>Projects I&apos;m proud of</h2>
      <Card
        title="Lunch-App"
        description="Project is setup using Vite (React / TypeScript), PostCSS, Jest, React Testing Library."
        technologiesHeading="Technologies used include:"
        technologies="HTML, PostCSS, Vite ( REACT / TypeScript )"
        img={lunchApp}
        isLink
        projectLink="https://lunch-app-beta.vercel.app"
        githubtLink="https://github.com/valsin132/Lunch-app"
      />
      <Card
        title="To-Do-App"
        description="This project is set up using Vite with React and features a dark/light mode toggle implemented via React Context. Tasks are managed and persisted in local storage using a context-based approach, allowing for state management and updates across the application. This setup provides a responsive and dynamic user interface."
        technologiesHeading="Technologies used include:"
        technologies="HTML, CSS, Vite ( REACT )"
        img={todoApp}
        isLink
        projectLink="https://to-do-app-one-wheat.vercel.app/"
        githubtLink="https://github.com/valsin132/to-do-app"
        isReverse
      />
    </div>
  );
}
