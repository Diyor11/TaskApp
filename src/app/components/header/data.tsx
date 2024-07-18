import { MenuProps } from "antd"

export const menuItems = [
  {text: "Главная", link: "/"},
  {text: "О нас", link: "/"},
  {text: "Продукты", link: "/"},
  {text: "Контакты", link: "/"},
  {text: "Новости", link: "/"},
]

export const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a rel="noopener noreferrer" href="#">
        RU
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a rel="noopener noreferrer" href="#">
        UZ
      </a>
    ),
  },
]