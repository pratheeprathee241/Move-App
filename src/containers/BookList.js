import React,{useState,useEffect} from 'react'
import { API_URL } from '../API'
import axios from 'axios'
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';
const BookList = () => {
    const [books, setBooks] = useState([]);

    const {favorites, addFavorites, removeFromFavorites} = useAppContext();

     const navigate = useNavigate();
     
     const favoriteChecker= (id)=>{
      const boolean = favorites.some((book)=>book.id === id)
      return boolean
      }

    useEffect(()=>{
        axios.get(API_URL)
        .then((res)=>{
            console.log(res.data);
            setBooks(res.data)}
        ).catch((err)=>console.log(err));
    },[])
  return (
    <div className='book-list'>
         {books.map((book)=>(
            <div key={book.id} className='book'>
                 <div>
                    <h3>{book.title}</h3>
                 </div>
                 <div>
                    <img src={book.image_url} alt='#' onClick={()=>navigate(`/books/${book.id}`)}/>
                 </div>
                 {favoriteChecker(book.id) ? (
                           <button onClick={()=> removeFromFavorites(book.id)}>Remove to Favorites</button>

                 ):(
                 
                    <button onClick={()=> addFavorites(book)}>Add to Favorites</button>
                 )}
            </div>
         ))}
    </div>
  )
}

export default BookList