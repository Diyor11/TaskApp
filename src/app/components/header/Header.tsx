"use client"
import MenuIcon from "@/assets/svg/MenuIcon";
import "./header.scss"
import LogoIcon from "@/assets/svg/LogoIcon";
import SearchIcon from "@/assets/svg/SearchIcon";
import { Dropdown } from "antd";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@/assets/svg/CloseIcon";
import {items, menuItems} from './data'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <>
    <header id="header">
      <div className="container">
        <div className="header__content">
          <LogoIcon width={110} className="header__icon"  />
          <nav>
            <ul className="menu header__links">
              {menuItems.map(({text, link}, index) => (
                <li className="menu__item" key={index}>
                  <Link className="header__link" href={link}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <MenuIcon onClick={() => setMenuOpen(true)} className="header__menu-btn" />
          </nav>
          <div className="header__actions">
            <form className="header__form search-form">
              <SearchIcon className="search-form__icon" />
              <input type="text" className="search-form__input" placeholder="Поиск..."/>
            </form>
            <Dropdown className="language" menu={{ items }} placement="bottomLeft">
              <button className="language__btn">EN</button>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
    <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

function Sidebar({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {

  return(
    <div className={`sidebar ${isOpen ? "active":"hide"}`}>
      <div className="container">
        <div className="sidebar__action">
          <CloseIcon className="close-icon" onClick={onClose} />
        </div>
        <ul className="sidebar__links">
              {menuItems.map(({text, link}, index) => (
                <li className="sidebar__link" key={index}>
                  <Link className="sidebar__link" href={link}>
                    {text}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}