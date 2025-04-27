"use client";
import styles from "./NavLink.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NaVLinkProps {
  href: string;
  children: string;
  onClick: () => void;
}

const NavLink = ({ href, children, onClick }: NaVLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${pathname === href ? styles.active : ""} ${styles.navLink}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
