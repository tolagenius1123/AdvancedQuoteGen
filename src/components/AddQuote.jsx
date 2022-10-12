import React, { useState } from 'react'
import './AddQuote.css'
import axios from 'axios'
import Navbar from './Navbar'

const AddQuote = () => {


    const newUserQuote = {
        quote: "",
        author: "",
    }

    const [userQuote, setUserQuote] = useState(newUserQuote)



    const handleChange = (e) => {
        const {name, value} = e.target
        setUserQuote({...userQuote, [name]: value})
        // console.log(userQuote);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userQuote);
        axios.post("http://localhost:5000/userQuotes", userQuote)
        // axios.post("http://localhost:8000/quotes/quoteslist/", userQuote)
            .then(res => alert("Your Quote was saved successfully!", res))
            .catch(err => console.log(err))
        setUserQuote(newUserQuote)

    }

    return (
        <>
            <Navbar />
            <div className='add-quote'>
                <form>
                    <label>Enter a Quote</label>
                    <textarea name="quote" cols="30" rows="5" onChange={handleChange} value={userQuote.quote}></textarea>
                    <label>Author</label>
                    <input type="text" name='author' onChange={handleChange} value={userQuote.author}/>
                    <button id='form-btn' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
        )
    }

export default AddQuote