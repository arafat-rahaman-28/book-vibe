import BookDetails from "@/app/components/BookDetails";
import React from "react";
const getBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_SERVER_BASE_URL}/booksData.json`,
  );
  const data = await response.json();
  return data;
};

const page = async ({ params }) => {
  const { bookId } = await params;
  const booksData = await getBooks();
  const book = booksData.find((book) => String(book.bookId) === String(bookId));
  return (
    <div>
      <BookDetails key={book.bookId} book={book} />
    </div>
  );
};

export default page;
