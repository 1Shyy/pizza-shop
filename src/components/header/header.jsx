import React, { useEffect, useState } from 'react'
import './header.css'
import CartItem from '../cartItem/cartItem'

export default function Header(props) {
  var [cartOpen, setCartOpen] = useState(false)
  var [value, setValue] = useState('')
  useEffect(() => {
    document.body.classList.toggle('overflow');
    document.getElementById('header').classList.toggle('margin')
  }, [cartOpen])
  
  
  
  
  return (
    <header>
      <div id='header' className='header'>
        <div className='navContainer'>
          <span className='logo'>Pizzaly</span>
          <ul className='nav'>
            <li><a href="#pizza">Пиццы</a></li>
            <li><a href="#snacks">Закуски</a></li>
            <li><a href="#breakfast">Завтрак</a></li>
            <li><a href="#cocktails">Коктейли</a></li>
            <li><a href="#drinks">Напитки</a></li>
            <li><a href="#deserts">Десерты</a></li>
            <li><a href="#sauces">Соусы</a></li>
          </ul>
          <div>
          <button onClick={() => setCartOpen(!cartOpen)} >Корзина{props.counts > 0 && ` | ${props.counts}`}</button>
          </div>
        </div>
      </div>
      <div className={`shopCart ${cartOpen && 'active'}`}>
        <img src='./img/cross.svg' alt='cross' className={`cross ${cartOpen && 'activeCross'}`} onClick={() => setCartOpen(!cartOpen)} />
        {props.orders.length === 0 && <div className='cartEmpty'>
          <img src='./img/cart-puppy.svg' alt='puppy' />
          <h3>Пока тут пусто</h3>
          <p>Добавьте пиццу. Или две!<br /> А мы доставим ваш заказ!</p>
        </div>}
        {props.orders.length > 0 && <div className='cartFill'>
          <div className='upperCart'>
            <h2>Корзина</h2>
            <div className='cartItems'>
              {props.orders.map(el => (

                <CartItem key={el.id} item={el} orders={props.orders} onRemove={props.onRemove} incItem={props.incItem} decItem={props.decItem} callback={props.handleCallback}/>
              ))}
            </div>
          </div>
          <div className='resultCart'>
            <div className='promocode'>
              <input id='promo' placeholder='Промокод' onChange={val => setValue(val.target.value)}></input>
              {(props.orders.length > 0 && value !== '') && <div className='applyPromo'>Применить</div>}
            </div>
            <div className='list'>
              <div className='listPrice'>
                <div>{props.counts}{props.counts < 2 && ' товар'}{(props.counts > 1 && props.counts < 5) && ' товара'}{props.counts > 4 && ' товаров'}</div>
                <div>{props.check} ₽</div>
              </div>
              <div className='listBonuses'>
                <div>Начислим бонусов</div>
                <div>+{Math.trunc(props.check/10)} ◎</div>
              </div>
              <div className='listDelivery'>
                <div>Доставка</div>
                <div>Бесплатно</div>
              </div>
            </div>
            <div className='resultPrice'>
              <div>Сумма заказа</div>
              <div>{props.check} ₽</div>
            </div>
            <button>К оформлению заказа</button>
          </div>
        </div>}
      </div>
      <div className={`${cartOpen && 'shadowActive'} ${!cartOpen && 'pointerEvents'} shadow`} onClick={() => setCartOpen(!cartOpen)}></div>
    </header>
  )
}


