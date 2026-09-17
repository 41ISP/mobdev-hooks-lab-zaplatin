import { useState } from 'react'

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedTitle = title.trim()
    
    if (trimmedTitle) {
      onAdd(trimmedTitle)
      setTitle('') 
    }
  }

  return (
    <form className="add-book-row" onSubmit={handleSubmit}>
      <input 
        className="input" 
        placeholder="Название книги..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn">
        Добавить на полку
      </button>
    </form>
  )
}