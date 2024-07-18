"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { articles } from './data';
import Image from 'next/image'
import Link from 'next/link'
import "./article.scss"
import ArrowRight from '@/assets/svg/ArrowRight';

type Props = {}

function Slider({}: Props) {
  return (
    <Swiper
    className='article-slider'
           modules={[Autoplay]}
           autoplay={{delay: 1000}}
        >
          {articles.map(({text, img}, index) => (
            <SwiperSlide key={index}>
              <div  className="posts__item article">
                <Image src={img} width={390} height={320} className="article__img" alt={text} />
                <div className="article__content">
                  <div className="article__title">{text}</div>
                  <Link className='article__btn' href={"#"}>Читать <ArrowRight className="icon" /></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  )
}

export default Slider