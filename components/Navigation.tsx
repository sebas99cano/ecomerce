import Link from "next/link";
import styles from "./Navigation.module.css";
const Navigation = () => {
  const link = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Post", route: "/post" },
  ];
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {link.map(({ label, route }) => {
            return (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
