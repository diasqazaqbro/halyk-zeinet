import Link from "next/link";
import cn from "classnames";
import styles from "./styles.module.scss";

export default function Navbar() {
  const navs = [
    { name: "Главная", link: "/" },
    { name: "Аннуитет", link: "/" },
    { name: "ОППВ", link: "/" },
    { name: "Калькулятор", link: "/" },
    { name: "FAQ", link: "/" },
  ];
  return (
    <nav className={cn("flex justify-center items-center", styles.nav)}>
      {navs.map((nav, index) => (
        <Link key={index} className={styles.nav__link} href={nav.link}>
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
