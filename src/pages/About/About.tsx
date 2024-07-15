import { Card } from '../../components/Card';
import myPhoto from '../../assets/images/myPhoto.jpg';

export function About() {
  return (
    <Card
      title="About Valdemaras Sinkevicius"
      description="I love programming because it allows me to bring ideas to life, solve complex problems, and continuously learn and innovate. There's nothing more rewarding than creating user-friendly and visually appealing interfaces that improve people's digital experiences."
      technologiesHeading="My favorite technologies include:"
      technologies="HTML, CSS, JS, TS, REACT, NodeJS"
      img={myPhoto}
    />
  );
}
