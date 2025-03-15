import React, { useContext,useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext(null) ;

export const useAppContext = () =>{
    const context = useContext(AppContext)
    if(context === undefined){
        throw new Error('Appcontex mus be within AppcontextProvider')
    }return context;
} 

const AppContextProduct = ({children})=> {
    const [favorites, setFavorites] = useState([])

    const addFavorites = (book) =>{
        const oldFavorites = [...favorites];
        
        const newFavorites = oldFavorites.concat(book)
        setFavorites(newFavorites)
    }
const removeFromFavorites=(id)=>{
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book)=> book.id !== id);
    setFavorites(newFavorites)
};

  return (
    <AppContext.Provider value={{favorites, addFavorites, removeFromFavorites}}>
          {children}
    </AppContext.Provider>
  )
}

export default AppContextProduct