import React from "react";
import BookCard from "./BookCard";

const getBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_SERVER_BASE_URL}/booksData.json`,
  );
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  return (
    <div className="container mx-auto grid grid-cols-3 gap-6 mt-16">
      {booksData.map((book) => (
        // <div key={book.bookId}>{book.bookName}</div>
        <BookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Books;

// comment
