import React from 'react'
import "./hero-section.scss"
import Header from '../../header/Header'
import PlayIcon from '@/assets/svg/PlayIcon'

function HeroSection() {
  return (
    <section className='hero-section'>
      <Header />
      <div className="container">
        <div className="hero-content">
          <div className="hero-title">Экологически чистые продукты из богатой флоры <span>Узбекистана</span></div>
          <p className="hero-desc">
            Страна Шелкового пути, древней сети торговых маршрутов, была местом культурного обмена и глубоких знаний. Опираясь на богатое историческое наследие Узбекистана и стремление к инновациям, в 2018 году в самом сердце Центральной Азии было создано современное предприятие, целью которого является использование экологически чистых, натуральных местных природных богатств — цветов, листьев, кожуры, семян, корней дикорастущих лекарственных растений, фруктов и овощей
          </p>
          <div className="hero-actions">
            <button className="hero-btn">Связаться с нами</button>
            <button className="hero-btn">Смотреть о нас <PlayIcon className="hero-btn__icon" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection