import classNames from 'classnames/bind';
import { Card } from '../../components/Card';
import lunchApp from '../../assets/images/lunchApp.png';
import todoApp from '../../assets/images/todoApp.png';
import homeService from '../../assets/images/homeService.png';
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
        title="Find Home Service & Repair"
        description="Find Home Service/Repair Near You: is a full-stack web application to explore and book the best home services and repairs in your area. Frontend: built with Vite, React, TypeScript, Sass, and HTML for a fast, dynamic, and responsive user experience. Backend: powered by Express, Node.js, and MongoDB for efficient data handling, secure APIs, and seamless user interactions. The platform allows users to browse services, book appointments, and manage bookings with ease."
        technologiesHeading="Technologies used include:"
        technologies="HTML, SASS, Vite ( REACT / TypeScript ), Node.js, Express, MongoDB"
        img={homeService}
        isLink
        projectLink="https://home-service-app-frontend-one.vercel.app"
        githubtLink="https://github.com/valsin132/home-service-app"
        isReverse
      />
      <Card
        title="To-Do-App"
        description="This project is set up using Vite with React and features a dark/light mode toggle implemented via React Context. Tasks are managed and persisted in local storage using a context-based approach, allowing for state management and updates across the application. This setup provides a responsive and dynamic user interface."
        technologiesHeading="Technologies used include:"
        technologies="HTML, CSS, Vite ( REACT )"
        img={todoApp}
        isLink
        projectLink="https://to-do-app-one-wheat.vercel.app"
        githubtLink="https://github.com/valsin132/to-do-app"
      />
    </div>
  );
}
