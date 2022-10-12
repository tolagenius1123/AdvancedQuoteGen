import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { BsDashLg } from "react-icons/bs";
import './QuoteGenerator.css'
import Navbar from './Navbar';


const Quote = ({quote, author, getQuotes}) => {

    return (
    <>
        <div className="quote">
            <ImQuotesLeft className='quote-icon-right'/>
            <h2>{quote}</h2>
            <ImQuotesRight className='quote-icon-left'/>
        </div>
        <p className="author"><BsDashLg className='tag'/>{author}</p>
        <hr />
        <div className="btns">
            <button>Prev</button>
            <button onClick={getQuotes}>Get Quote</button>
            <button onClick={getQuotes}>Next</button>
        </div>
    </>
    )
}

export default Quote