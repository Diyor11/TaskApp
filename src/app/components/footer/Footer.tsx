import LogoIcon from "@/assets/svg/LogoIcon"
import "./footer.scss"
import TelegramSvg from "@/assets/svg/telegram.svg"
import InstagramSvg from "@/assets/svg/instagram.svg"
import FacebookSvg from "@/assets/svg/ic_baseline-facebook.svg"

import {  footerLinks, contacts } from "./data"
import Image from "next/image"


export default function Footer() {

  return(
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="left">
            <LogoIcon width={250} className="footer-logo" />
            <div className="adresses">
              <div className="adderss-office address">
                <div className="address-title">Адрес головного офиса:</div>
                <p>100100, Республика Узбекистан, город Ташкент, Яккасарайский район, улица Шота Руставели, 53Б</p>
              </div>
              <div className="adderss-factory address">
                <div className="address-title">Адрес головного офиса:</div>
                <p>100100, Республика Узбекистан, город Ташкент, Яккасарайский район, улица Шота Руставели, 53Б</p>
              </div>
            </div>
          </div>
          <div className="right">
            <ul className="footer-menu">
              {footerLinks.map(({text, link}, index) => (
                <li key={index} className="footer-menu__item">
                  <a className="footer-link" href={link}>{text}</a>
                </li>
              ))}
            </ul>
            <ul className="footer-contacts footer-menu">
              {contacts.map(({text, link}, index) => (
                <li key={index} className="footer-menu__item">
                  <a className="footer-link " href={link}>{text}</a>
                </li>
              ))}
              <li className="footer-menu__item socials">
                <a href="#" className="socials__item">
                  <Image src={TelegramSvg} width={24} height={24} alt="telegram" />
                </a>
                <a href="#" className="socials__item">
                  <Image src={FacebookSvg} width={24} height={24} alt="telegram" />
                </a>
                <a href="#" className="socials__item">
                  <Image src={InstagramSvg} width={24} height={24} alt="telegram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}