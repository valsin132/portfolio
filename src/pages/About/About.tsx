import { Card } from '../../components/Card';
import myPhoto from '../../assets/images/myPhoto.jpg';

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
