import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

export default function Layout() {
  const [theme, setTheme] = useState(initialTheme);

  function handleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.themeToggle}
          onClick={handleTheme}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <h1 className={styles.logo}>AfterCredits</h1>
        <p className={styles.tagline}>
          Log, rate and rank the movies you've watched.
        </p>
        <nav className={styles.nav} data-testid="nav">
          <NavLink to="/" end className={navClass}>
            Movies
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        AfterCredits · Web Technologies project
      </footer>
    </>
  );
}