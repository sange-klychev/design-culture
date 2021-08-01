import React from 'react';
import imgUrl from './card-img.webp';
import Icon from '../Icon';

type PropsType = {
  sale: boolean,
}

function Card({ sale }: PropsType) {
  return (
    <div className="card">
      <img
        src={imgUrl}
        className="card__img"
        alt="img"
      />
      <h4 className="card__title">
        Куртка мужская ТМ INSIDE
      </h4>
      <p className="card__descr">
        Ткань - плотная плащовка
      </p>
      <span className={sale ? 'card__price sale' : 'card__price span'}>
        105p
      </span>
      {sale
        && (
        <span className="card__price new">
          75p
        </span>
        )}
      <button
        className="card__add"
        type="button"
      >
        <Icon
          name="add"
          color="#000000"
          width="30px"
          height="30px"
        />
      </button>
    </div>
  );
}

export default Card;
