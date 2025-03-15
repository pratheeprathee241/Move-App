import React from 'react'
import '../App'
import { useAppContext } from './context/appContext';

const Favorites = () => {
  const {favorites, addFavorites, removeFromFavorites} = useAppContext();


        const favoriteChecker= (id)=>{
        const boolean = favorites.some((book)=>book.id === id)
        return boolean
        }
  return (
    <div className='fav'>
          {favorites.length > 0 ? favorites.map((book)=>(
            <div key={book.id} className='book'>
                 <div>
                    <h3>{book.title}</h3>
                 </div>
                 <div>
                    <img src={book.image_url} alt='#'/>
                 </div>
                 {favoriteChecker(book.id) ? (
                           <button onClick={()=> removeFromFavorites(book.id)}>Remove to Favorites</button>

                 ):(
                 
                    <button onClick={()=> addFavorites(book)}>Add to Favorites</button>
                 )}
            </div>
         )):<h2>You don't have favorites</h2>}
    </div>
  )
}

export default Favorites