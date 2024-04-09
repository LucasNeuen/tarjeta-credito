import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

import React, { useState } from 'react';
import './PaymentForms.css'



const PaymentForms = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                    onChange={handleInputChange}
                />

                <form>
                    <div className='form-group'>
                        <label htmlFor='number'>Numero de tarjeta</label>
                        <input className='form-control' 
                            type="number" 
                            name="number" 
                            id="number"
                            maxLength="16" 
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Nombre</label>
                        <input className='form-control' 
                            type="text" 
                            name="name" 
                            id="name"
                            maxLength="22"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label htmlFor='name'>Vali-Date</label>
                            <input className='form-control' 
                                type="number" 
                                name="expiry" 
                                id="expiry"
                                maxLength="4"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className='form-group col-md-6'>
                            <label htmlFor='cvc'>CVC</label>
                            <input className='form-control' 
                                type="number" 
                                name="cvc" 
                                id="cvc"
                                maxLength="3"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                    </div>

                        

                </form>
            </div>
        </div>
    )
}

export default PaymentForms;