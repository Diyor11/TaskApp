
import React from 'react'
import "./article.scss"
import Image from 'next/image'
import Link from 'next/link'
import { articles } from './data'
import ArrowRight from '@/assets/svg/ArrowRight'
import Slider from './Slider'

type Props = {}

function Articles({}: Props) {
  return (
    <section className='articles'>
      <div className="container">
        <h4 className="articles__title">
          Полезные статьи
        </h4>
        <div className="articles__desc">
          На нашем сайте мы публикуем новости отрасли и исследовательские статьи. Будьте в курсе новостей и интересных статей.
        </div>
        <div className="posts">
          {articles.map(({text, img}, index) => (
            <div key={index} className="posts__item article">
              <Image src={img} width={390} height={320} className="article__img" alt={text} />
              <div className="article__content">
                <div className="article__title">{text}</div>
                <Link className='article__btn' href={"#"}>Читать <ArrowRight className="icon" /></Link>
              </div>
            </div>
          ))}
        </div>
        <Slider />
      </div>
    </section>
  )
}

export default Articles