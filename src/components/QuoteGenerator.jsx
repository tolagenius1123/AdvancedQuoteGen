import React, { useEffect, useState } from 'react'
import './QuoteGenerator.css'
import axios from 'axios'
import Quote from './Quote'
import Navbar from './Navbar'


const QuoteGenerator = () => {
  const [quote, setQuote] = useState("You were not born a winner, and you were not born a loser. You are what you make yourself be.")
  const [author, setAuthor] = useState("Nelson Mandela")

  const API_URL = "https://api.quotable.io/random"
  // const API_URL = "http://localhost:5000/userQuotes"


  const getQuotes = () => {
      axios.get(API_URL)
        .then((res) => {
            setQuote(res.data.content)
            setAuthor(res.data.author)
        })
        .then(err => console.log(err))
  } 

  useEffect(() => {
    getQuotes()
  }, [])  

  return (
    <>
      <Navbar />
      <div className='quote-generator'>
          <Quote 
            quote={quote}
            author={author}
            getQuotes={getQuotes}
          />
      </div>
    </>
  )
}

export default QuoteGenerator