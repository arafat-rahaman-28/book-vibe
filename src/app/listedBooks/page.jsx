"use client";

import { useContext } from "react";
import { BooksContext } from "@/Context/BooksContext";
import BookTabs from "../components/BookTabs";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);

  return (
    <main className="min-h-screen py-8">
      {/* Page Heading */}
      <div className="container mx-auto rounded-xl bg-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Books</h1>
      </div>

      {/* Book Tabs */}
      <BookTabs readBooks={readBooks} wishList={wishList} />
    </main>
  );
};

export default ListedBooks;
