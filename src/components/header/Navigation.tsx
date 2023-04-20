import React from 'react';

function Navigation() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li>
          <div className="menu__item-header">Время работы:</div>
          <div className="menu__item">
            Пн-пт с 10:00 до 20:00
          </div>
          <div className="menu__item">
            Сб с 10:00 до 15:00
          </div>
          <div>
            Вс выходной
          </div>
        </li>
        <li>
          <div className="menu__item-header">Контакты:</div>
          <div>
            <a className="menu__link" href="tel:79009993322">
              +7(900)999-33-22
            </a>
          </div>
          <div>
            <a className="menu__link" href="tel:79009993322">
              +7(900)999-33-22
            </a>
          </div>
          <div>
            <a className="menu__link" href="mailto:mail@mail.ru">
              mail@mail.ru
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
