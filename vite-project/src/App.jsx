import { useState } from 'react'
import ShelfScreen from '/workspaces/mobdev-hooks-lab-zaplatin/vite-project/src/pages/ShelfScreen/ShelfScreen.jsx'
import './index.css'

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'gege', author: 'xexe', read: true }
  ])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  const handleAddBook = (title) => {
    const newBook = {
      id: Date.now(),
      title,
      author: 'Неизвестный автор',
      read: false
    }
    setBooks(prev => [...prev, newBook])
  }

  const handleToggleRead = (id) => {
    setBooks(prev => prev.map(book => 
      book.id === id ? { ...book, read: !book.read } : book
    ))
  }

  const handleDeleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id))
  }

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>
      
      <ShelfScreen 
        books={books}
        showOnlyUnread={showOnlyUnread}
        setShowOnlyUnread={setShowOnlyUnread}
        onAddBook={handleAddBook}
        onToggleRead={handleToggleRead}
        onDeleteBook={handleDeleteBook}
      />
    </div>
  )
}

export default App