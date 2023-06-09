import React  from "react";
import PropTypes from "prop-types";
import "../currencInput.css";

function CurrencyInput(props){
    return(
        <div className="group"> 
            <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)}></input>
            <select value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
                {props.currencies.map((currency => (<option value={currency}>{currency}</option>)))}
                
            </select>
        </div>
    )
}


CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired};


export default CurrencyInput;