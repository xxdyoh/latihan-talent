import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HomeNav.module.css';
import { ReactComponent as PizzaIcon } from '../../../Assets/combos-icon.svg';
import { ReactComponent as DrinksIcon } from '../../../Assets/drinks-icon.svg';

const HomeNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/Makanan" activeClassName={styles.active}>
        <PizzaIcon />
        Makanan
      </NavLink>
      <NavLink to="/Minuman" activeClassName={styles.active}>
        <DrinksIcon />
        Minuman
      </NavLink>
    </nav>
  );
};

export default HomeNav;