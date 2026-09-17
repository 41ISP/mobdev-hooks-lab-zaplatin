export default function BookItem({ book, onToggle, onDelete }) {
  const colors = ['#4f6b52', '#8a3a3a', '#c9a227', '#6f6353', '#2c231c']
  const coverColor = colors[book.id % colors.length]
  
  //первуа буква названия для обложки
  const firstLetter = book.title ? book.title.charAt(0).toUpperCase() : '?'

  return (
    <div className="book-row">
      <div className="book-cover" style={{ background: coverColor }}>
        {firstLetter}
      </div>
      
      <div className="book-info">
        <p className={`book-title ${book.read ? 'done' : ''}`}>
          {book.title}
        </p>
        <div className="book-author">{book.author}</div>
      </div>
      
      <div 
        className={`read-check ${book.read ? 'checked' : ''}`} 
        onClick={() => onToggle(book.id)}
      >
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </div>
      
      <button
        className="delete-btn"
        title="Убрать с полки"
        onClick={() => onDelete(book.id)}
      >
        ✕
      </button>
    </div>
  )
}