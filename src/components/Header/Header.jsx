import React from "react";
import { formatDate } from "../helpers/formatDate";
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>News</h1>
      <p>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
