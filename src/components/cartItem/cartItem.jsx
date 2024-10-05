import React, { Component } from 'react'
import './cartItem.css'

export class cartItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };

  }


  render() {
    return (
      <div className='item'>
        <div className='itemName'>
          <img src={`./img/${this.props.item.img}`} alt={this.props.item.title} className='itemImg' />
          <div>
            <h3>{this.props.item.title}</h3>
            {this.props.item.category === 'pizza' &&
              <p>{this.props.item.size === 1 && '25 см, '}{this.props.item.size === 2 && '30 см, '}{this.props.item.size === 3 && '35 см, '}
                {this.props.item.dough === 1 && 'традиционное тесто'}{this.props.item.dough === 2 && 'тонкое тесто'}
              </p>
            }
          </div>
          <img src='./img/cross.svg' alt='cross' className='itemCross' onClick={() => {
            this.props.onRemove(this.props.item)
            this.props.callback()
          }} />
        </div>
        <div className='price'>
          <div className='itemPrice'>{this.props.item.price * this.props.item.count}₽</div>

          <div className='changeButton'>
            <button className='decButton' onClick={() => {
              if ((this.props.item.count) !== 1) {
                this.props.decItem(this.props.item)
                this.setState({ count: this.state.count - 1 })
                this.props.callback()
              }
            }}>-</button>
            <div className='count'>{this.props.item.count}</div>
            <button className='incButton' onClick={() => {
              this.props.incItem(this.props.item)
              this.setState({ count: this.state.count + 1 })
              this.props.callback()
            }}>+</button>
          </div>


        </div>
      </div>
    )
  }
}
export default cartItem