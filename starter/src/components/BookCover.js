// cover for every requested book

const BookCover = ({ link }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${link})`,
      }}
    ></div>
  );
};

export default BookCover;