import React from "react";
import style from "../components/Sidebar.module.css";
import Logo from "../components/Logo";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={style.footer}>
        <p className={style.copyright}>
          Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}
