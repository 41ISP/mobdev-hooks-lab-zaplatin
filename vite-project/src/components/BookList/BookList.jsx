import BookItem from '../BookItem/BookItem'

export default function BookList({ books, onToggleRead, onDeleteBook }) {
  if (books.length === 0) {
    return <p>Здесь пока пусто...</p>
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookItem 
          key={book.id} 
          book={book} 
          onToggle={onToggleRead}
          onDelete={onDeleteBook}
        />
      ))}
    </div>
  )
}