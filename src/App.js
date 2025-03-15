import React from 'react'
import {Route,Routes} from 'react-router-dom'
import BookList from './containers/BookList'
import BookDetails from './containers/BookDetails'
import Navabar from './containers/Navabar'
import Footer from './containers/Footer'
import Favorites from './containers/Favorites'
import './App.css';

const App = () => {
  return (
    <div className='App'> 
    <Navabar />
      <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/favories" element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App