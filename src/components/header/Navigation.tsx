import React from 'react';

const storage = window.sessionStorage;

function Navigation() {
  const activeLinkStorage: string | null = storage.getItem('activeLink');

  const [activeLink, setActiveLink] = React.useState(activeLinkStorage || 'Каталог');

  type MenuItemsType = {
    title: string,
  }
  const MENU_ITEMS: MenuItemsType[] = [
    { title: 'Каталог' },
    { title: 'Доставка' },
    { title: 'Блог' },
    { title: 'Магазины' },
  ];
  const handleClick: Function = (e: React.MouseEvent<HTMLLinkElement>) => {
    const target = e.target as HTMLElement;
    setActiveLink(target.innerText);
    storage.setItem('activeLink', target.innerText);
  };
  return (
    <nav className="menu">
      <ul className="menu__list">
        {MENU_ITEMS.map(({ title }) => (
          <li
            className="menu__item"
            key={title}
          >
            <a
              className={title === activeLink ? 'menu__link active' : 'menu__link'}
              href="#catalog"
              onClick={(e) => handleClick(e)}
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
