import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HomeNav.module.css';
import { ReactComponent as PizzaIcon } from '../../../Assets/pizza-icon.svg';
import { ReactComponent as BurguersIcon } from '../../../Assets/burguers-icon.svg';
import { ReactComponent as CombosIcon } from '../../../Assets/combos-icon.svg';
import { ReactComponent as DessertsIcon } from '../../../Assets/desserts-icon.svg';
import { ReactComponent as DrinksIcon } from '../../../Assets/drinks-icon.svg';

const HomeNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/Pizza" activeClassName={styles.active}>
        <PizzaIcon />
        Pizza
      </NavLink>
      <NavLink to="/Minuman" activeClassName={styles.active}>
        <DrinksIcon />
        Minuman
      </NavLink>
      <NavLink to="/PencuciMuka" activeClassName={styles.active}>
        <DessertsIcon />
        Pencuci Muka
      </NavLink>
      <NavLink to="/Paket" activeClassName={styles.active}>
        <CombosIcon />
        Paket
      </NavLink>
      <NavLink to="/Burger" activeClassName={styles.active}>
        <BurguersIcon />
        Burger
      </NavLink>
    </nav>
  );
};

export default HomeNav;
