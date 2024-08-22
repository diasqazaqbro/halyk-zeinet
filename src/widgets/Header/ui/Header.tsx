"use client";
import React from "react";
import styles from "./styles.module.scss";
import LogoDesktop from "@/shared/ui/Icon/Logo/LogoDesk";
import { Navbar } from "@/entities/Navbar";
import Button, { ButtonSize } from "@/shared/ui/Button/Button";
import Link from "next/link";
import { MenuNavbar } from "@/entities/Navbar/ui/component/NavbarMob";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <LogoDesktop />
        </Link>
        <div className="flex items-center" style={{ gap: "2.25rem" }}>
          <Navbar />
          <Button className={styles.header__btn} size={ButtonSize.M}>
            Звонок
          </Button>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)} className={styles.burger}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      {menuOpen && <MenuNavbar onClose={() => setMenuOpen(false)} />}
    </header>
  );
}
