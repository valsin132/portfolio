import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const cx = classNames.bind(styles);

interface CardProps {
  title: string;
  description: string;
  link?: string;
  isLink?: boolean;
  technologiesHeading?: string;
  technologies?: string;
  img: string;
  isReverse?: boolean;
}

export function Card({
  title,
  description,
  link,
  isLink,
  technologiesHeading,
  technologies,
  img,
  isReverse,
}: CardProps): ReactElement {
  return (
    <div className={cx('card')}>
      <article className={cx('card__container', { 'card--reverse': isReverse })}>
        <div className={cx('card__text-container')}>
          <h3 className={cx('card__title')}>{title}</h3>
          <p className={cx('card__description')}>{description}</p>
          {isLink && link && (
            <h4 className={cx('card__link')}>
              <Link to={link} target="_blank">
                Link to project
              </Link>
            </h4>
          )}
          <h4 className={cx('card__tech-heading')}>{technologiesHeading}</h4>
          <p className={cx('card__technologies')}>{technologies}</p>
        </div>
        <img className={cx('card__img')} src={img} alt={title} />
      </article>
    </div>
  );
}
