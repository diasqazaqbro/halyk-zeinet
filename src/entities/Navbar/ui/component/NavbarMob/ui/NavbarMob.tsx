import styles from "./styles.module.scss";
import Link from "next/link";

interface MenuNavbarProps {
  onClose: () => void;
}

export default function MenuNavbar({ onClose }: MenuNavbarProps) {
  const navs = [
    { name: "Главная", link: "/" },
    { name: "Аннуитет", link: "#annuity" },
    { name: "ОППВ", link: "#oppv" },
    { name: "Калькулятор", link: "#calculator" },
    { name: "FAQ", link: "#faq" },
  ];
  return (
    <div className={styles.nav__container}>
      <nav className="flex justify-between relative">
        <ul className="flex flex-col gap-4">
          {navs.map((nav, index) => (
            <li key={index}>
              <Link href={nav.link} className="p-1 text-white">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.9668 1L1.00085 15.8684"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M1.0332 1.13184L15.9992 16.0002"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
}
