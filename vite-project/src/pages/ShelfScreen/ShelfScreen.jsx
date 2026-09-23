import BookForm from '/workspaces/mobdev-hooks-lab-zaplatin/vite-project/src/components/BookForm/BookForm.jsx'
import BookList from '/workspaces/mobdev-hooks-lab-zaplatin/vite-project/src/components/BookList/BookList.jsx'

export default function ShelfScreen({ 
  books, 
  showOnlyUnread, 
  setShowOnlyUnread, 
  onAddBook, 
  onToggleRead, 
  onDeleteBook 
}) {
  const filteredBooks = showOnlyUnread 
    ? books.filter(book => !book.read)
    : books;

  return (
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      
      <BookForm onAdd={onAddBook} />
      
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <div className="filter-chip">
          <input 
            type="checkbox" 
            id="filterCheckbox" 
            checked={showOnlyUnread}
            onChange={() => setShowOnlyUnread(prev => !prev)}
          />
          <label htmlFor="filterCheckbox">
            <span className="dot" />
            Только непрочитанные
          </label>
        </div>
      </div>

      <BookList 
        books={filteredBooks} 
        onToggleRead={onToggleRead}
        onDeleteBook={onDeleteBook}
      />
    </section>
  )
}
