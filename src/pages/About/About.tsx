import classNames from 'classnames/bind';
import { Card } from '../../components/Card';
import myPhoto from '../../assets/images/myPhoto.jpg';
import styles from './About.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cx = classNames.bind(styles);

export function About() {
  return (
    <Card
      title="About Valdemaras Sinkevicius"
      description="A passionate developer"
      technologiesHeading="My favorite technologies include:"
      technologies="HTML, CSS, JS, TS, REACT, NodeJS"
      img={myPhoto}
    />
  );
}
