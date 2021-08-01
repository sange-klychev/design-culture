import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppState } from '../redux/reducers';
import { setCategory } from '../redux/actions/filters';

function Aside() {
  const dispatch = useDispatch();

  const data = useSelector(({ filters }: AppState) => ({
    activeCategory: filters.category,
  }));

  type CategoryType = {
    title: string,
  }

  const CATEGORY_ITEMS: CategoryType[] = [
    { title: 'Все' },
    { title: 'Футболки' },
    { title: 'Худи, джемпера' },
    { title: 'Брюки' },
    { title: 'Аксессуары' },
    { title: 'Шорты' },
    { title: 'Верхняя одежда' },
  ];

  return (
    <aside className="aside">
      <div className="container">
        <ul className="aside__list">
          {CATEGORY_ITEMS.map(({ title }, index) => (
            <li
              key={title}
              className={data.activeCategory === index ? 'aside__item active' : 'aside__item'}
            >
              <span />
              <button
                onClick={() => dispatch(setCategory(index))}
                className="aside__button"
                type="button"
              >
                {title}
              </button>
              <span />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
