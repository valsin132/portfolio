import classNames from 'classnames/bind';
import { Card } from '../../components/Card';
import lunchApp from '../../assets/images/lunchApp.png';
import todoApp from '../../assets/images/todoApp.png';
import homeService from '../../assets/images/homeService.png';
import carRent from '../../assets/images/carRent.png'
import styles from './Projects.module.css';

const cx = classNames.bind(styles);

export function Projects() {
  return (
    <div>
      <h2 className={cx('projects-heading')}>Projects I&apos;m proud of</h2>
      <Card
        title="Car-Rent-App"
        description="A car rental platform is a full-stack web application offering users an easy way to find and book cars. The app includes user and admin panels. User Panel: browse cars, select rental dates, and confirm bookings. Admin Panel: manage car listings, add new vehicles, and oversee reservations. The intuitive design ensures a smooth user experience, from registration to booking confirmation."
        technologiesHeading="Technologies used include:"
        technologies="HTML, CSS, REACT, Node.js, Express, MongoDB"
        img={carRent}
        isLink
        projectLink="https://car-rent-app-iota.vercel.app"
        githubtLink="https://github.com/valsin132/CarRentApp-main"
      />
      <Card
        title="Lunch-App"
        description="Project is setup using Vite (React / TypeScript), PostCSS, Jest, React Testing Library."
        technologiesHeading="Technologies used include:"
        technologies="HTML, PostCSS, Vite ( REACT / TypeScript )"
        img={lunchApp}
        isLink
        projectLink="https://lunch-app-beta.vercel.app"
        githubtLink="https://github.com/valsin132/Lunch-app"
        isReverse
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
        isReverse
      />
    </div>
  );
}
