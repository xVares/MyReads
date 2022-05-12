import LibraryBooks from "./LibraryBooks";

// render sections
const Bookshelf = ({ heading, books, update }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{heading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <LibraryBooks books={books} update={update} />
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;