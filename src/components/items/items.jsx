import React, { Component } from 'react';
import './items.css';
import Item from './item/item';

export class Items extends Component {
    render() {
        return (
            <div className='main'>
                <h2 id={this.props.items[0].category}>{this.props.title}</h2>
                <div className='items'>
                    {this.props.items.map(el => (
                        < Item key={el.id} item={el} onAdd={this.props.onAdd} callback={this.props.handleCallback} openModal={this.props.openModal}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Items