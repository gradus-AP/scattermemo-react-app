import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css"; 

export default function SideBar() {
  return (
    <nav className={styles.sideBar}>
      <ul style={{listStyle:"none"}}>
        <li className={styles.listItem}><Link to="/">ホーム</Link></li>
        <li className={styles.listItem}><Link to="/boards">ボード管理</Link></li>
      </ul>
    </nav>
  );
}