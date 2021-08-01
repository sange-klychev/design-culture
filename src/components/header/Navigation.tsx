import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppState } from '../../redux/reducers';
import { setMenu } from '../../redux/actions/navigation';

function Navigation() {
  const dispatch = useDispatch();

  const data = useSelector(({ navigation }: AppState) => ({
    activeMenu: navigation.menu,
  }));

  type MenuItemsType = {
    title: string,
  }

  const MENU_ITEMS: MenuItemsType[] = [
    { title: 'Каталог' },
    { title: 'Доставка' },
    { title: 'Блог' },
    { title: 'Магазины' },
  ];

  return (
    <nav className="menu">
      <ul className="menu__list">
        {MENU_ITEMS.map(({ title }) => (
          <li
            className="menu__item"
            key={title}
          >
            <a
              className={title === data.activeMenu ? 'menu__link active' : 'menu__link'}
              href="#catalog"
              onClick={() => dispatch(setMenu(title))}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
