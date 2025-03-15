import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BOOK_DETAILS_URL } from '../API'
import '../App'
const BookDetails = () => {
  const [book, setBook] = useState({})
    const {id} = useParams()

      useEffect(()=>{
          axios.get(`${BOOK_DETAILS_URL}/${id}`)
          .then(res=>{setBook(res.data)
     }).catch((error)=> console.log(error))
      },[id])

  return (
    <div className='book-detailes'>
         <div className='book-img'>
         <h2>{book?.title}</h2>
         <img src={book?.image_url} alt='#' />
         </div>
         <div className='boook-post'>
          <h2>Description</h2>
          <p>{book?.description}</p>
          <h2>Authors</h2>
          <p>{book?.authors}</p>
          <h2>Genres</h2>
          <p>{book?.genres}</p>
         </div>
    </div>
  )
}

export default BookDetails