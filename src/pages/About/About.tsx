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
      description="Description of the project. This should be fairly concise while also describing
                        the key components that you developed or worked on. It can be as long as you need it to be but
                        should at least be a few sentences long. Be sure to include specific links anywhere in the
                        description."
      technologiesHeading="My favorite technologies include:"
      technologies="HTML, CSS, JS, TS, REACT, NodeJS"
      img={myPhoto}
    />
  );
}
