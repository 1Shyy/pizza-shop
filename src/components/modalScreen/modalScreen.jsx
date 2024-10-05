import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import './modalScreen.css';

export class modalScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radioChecked: 1,
            radioCheckedTh: 1,
        }
    }
    render() {
        return (
            <Transition in={this.props.isOpen} timeout={300} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`} onClick={this.props.openModal}>
                        <div className="modal-wrapper" >
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className='leftPart'>
                                    <img src={`./img/${this.props.pizza.img}`} className='pizzaImg' alt='pizza' />
                                </div>
                                <div className='rightPart'>
                                    <div className='rightPartWrapper'>
                                        <div className='aboutPizza'>
                                            <h2>{this.props.pizza.title}</h2>
                                            {this.props.pizza.category === 'pizza' &&
                                                <p className='aboutPizzaCharactery'>{this.state.radioChecked === 1 && '25 см, '}{this.state.radioChecked === 2 && '30 см,'}{this.state.radioChecked === 3 && '35 см,'}
                                                    {this.state.radioCheckedTh === 1 && ' традиционное тесто'}{this.state.radioCheckedTh === 2 && ' тонкое тесто'}
                                                </p>
                                            }
                                            <p>{this.props.pizza.desc}</p>
                                            <img src='./img/cross.svg' className='modalImg' alt='cross' onClick={() => {
                                                this.props.openModal()
                                                this.setState({ radioChecked: 1})
                                                this.setState({ radioCheckedTh: 1})
                                            }
                                            } />
                                            {this.props.pizza.category === 'pizza' &&
                                                <>
                                                    <div className='radioPizza'>
                                                        <div className='radioA radioBtn'>
                                                            <input type="radio" name="radioSize" value="1" checked={this.state.radioChecked === 1 ? true : false} onChange={() => this.setState({ radioChecked: 1 })} />
                                                            <label className='labelSize' onClick={() => this.setState({ radioChecked: 1 })}>Маленькая</label>
                                                        </div>
                                                        <div className='radioA radioBtn'>
                                                            <input type="radio" name="radioSize" value="2" checked={this.state.radioChecked === 2 ? true : false} onChange={() => this.setState({ radioChecked: 2 })} />
                                                            <label className='labelSize' onClick={() => this.setState({ radioChecked: 2 })}>Средняя</label>
                                                        </div>
                                                        <div className='radioA radioBtn'>
                                                            <input type="radio" name="radioSize" value="3" checked={this.state.radioChecked === 3 ? true : false} onChange={() => this.setState({ radioChecked: 3 })} />
                                                            <label className='labelSize' onClick={() => this.setState({ radioChecked: 3 })}>Большая</label>
                                                        </div>
                                                    </div>
                                                    <div className='radioPizza'>
                                                        <div className='radioB radioBtn'>
                                                            <input type="radio" name="radioTh" value="4" checked={this.state.radioCheckedTh === 1 ? true : false} onChange={() => this.setState({ radioCheckedTh: 1 })} />
                                                            <label className='labelTh' onClick={() => this.setState({ radioCheckedTh: 1 })}>Традиционное</label>
                                                        </div>
                                                        <div className='radioB  radioBtn'>
                                                            <input type="radio" name="radioTh" value="5" checked={this.state.radioCheckedTh === 2 ? true : false} onChange={() => this.setState({ radioCheckedTh: 2 })} />
                                                            <label className='labelTh' onClick={() => this.setState({ radioCheckedTh: 2 })}>Тонкое</label>
                                                        </div>
                                                    </div>
                                                </>}
                                        </div>
                                        {this.props.pizza.category === 'pizza' &&
                                        <div className='orderButton'>
                                            <button onClick={() => {
                                                this.props.openModal()
                                                this.props.onAdd(this.props.pizza, this.state.radioChecked, this.state.radioCheckedTh)
                                                this.props.callback(this.props.pizza, this.state.radioChecked, this.state.radioCheckedTh)
                                                this.setState({ radioChecked: 1})
                                                this.setState({ radioCheckedTh: 1})
                                            }}>В корзину за {this.state.radioChecked === 1 && this.props.pizza.price}{this.state.radioChecked === 2 && this.props.pizza.price30}{this.state.radioChecked === 3 && this.props.pizza.price35} ₽</button>
                                        </div>
                                        }
                                        {this.props.pizza.category !== 'pizza' &&
                                        <div className='orderButton'>
                                            <button onClick={() => {
                                                this.props.openModal()
                                                this.props.onAdd(this.props.pizza, this.state.radioChecked, this.state.radioCheckedTh)
                                                this.props.callback(this.props.pizza, this.state.radioChecked, this.state.radioCheckedTh)
                                                this.setState({ radioChecked: 1})
                                                this.setState({ radioCheckedTh: 1})
                                            }}>В корзину за {this.props.pizza.price} ₽</button>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        )
    }
}

export default modalScreen