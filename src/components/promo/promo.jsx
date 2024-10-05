import React from 'react'
import './promo.css'

export default function Promo() {
  return (
    <div className='promo'>
        <div className='promo-img'></div>
        <div className='promo-text'>
            <p className='promo-h'>Лучшая пицца с доставкой по всему городу</p>
            <p>От 299 ₽</p>
            <button>Заказать сейчас</button>
        </div>
    </div>
  )
}
