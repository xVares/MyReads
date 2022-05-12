import BookCover from "./BookCover";
import DropdownMenu from "./DropdownMenu";

const LibraryBooks = ({ books, update }) => {


  const handleShelf = (event, book) => {
    const selectedShelf = event.target.value;
    update(book, selectedShelf);
  };

  return (
    // fragments for clean display of section content
    <>

      {/* ternary displaying different elements depending on section content */}
      {books && books.length > 0 ? (
        books.map((book) => {
          return (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <BookCover link={book.imageLinks.smallThumbnail} />
                  <DropdownMenu handleShelf={handleShelf} book={book} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  {book.authors
                    ? book.authors.map((author, index) => {
                      return <div key={index}>{author}</div>;
                    })
                    : "no author"}
                </div>
              </div>
            </li>
          );
        })
      ) : (
        <p className="book-empty-shelf">No books in this section</p>
      )}
    </>
  );
};

export default LibraryBooks;