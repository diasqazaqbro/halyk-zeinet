import cn from "classnames";
import styles from "./styles.module.scss";
import LogoDesktop from "@/shared/ui/Icon/Logo/LogoDesk";
import { Navbar } from "@/entities/Navbar";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <LogoDesktop />
        </Link>
        <div className="flex items-center" style={{ gap: "2.25rem" }}>
          <Navbar />
          <Button size={ButtonSize.M}>Звонок</Button>
        </div>
      </div>
    </header>
  );
}
