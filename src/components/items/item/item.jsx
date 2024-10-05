import React, { Component } from 'react'
import './item.css'

export class Item extends Component {
    render() {
        return (
            <div className='item-s' onClick={() => this.props.openModal(this.props.item)}>
                <img src={`./img/${this.props.item.img}`} alt={this.props.item.title} />
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.desc}</p>
                <div>
                    <b>{this.props.item.category === 'pizza' && 'от '}{this.props.item.price} ₽</b>
                    <button>Выбрать</button>
                </div>
            </div>
           
        )
    }
}

export default Item