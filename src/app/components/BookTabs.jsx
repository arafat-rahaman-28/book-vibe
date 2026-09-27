"use client";

import { useState } from "react";
import BookCard from "./BookCard";

const BookTabs = ({ readBooks = [], wishList = [] }) => {
  const [activeTab, setActiveTab] = useState("read");

  const books = activeTab === "read" ? readBooks : wishList;

  return (
    <div className="container mx-auto mt-7 px-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("read")}
          className={`border-b-2 px-5 py-3 text-sm font-medium transition ${
            activeTab === "read"
              ? "border-green-600 text-green-600"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Read Books ({readBooks.length})
        </button>

        <button
          onClick={() => setActiveTab("wishlist")}
          className={`border-b-2 px-5 py-3 text-sm font-medium transition ${
            activeTab === "wishlist"
              ? "border-green-600 text-green-600"
              : "border-transparent text-gray-500 hover:text-gray-800"
          }`}
        >
          Wishlist Books ({wishList.length})
        </button>
      </div>

      {/* Book Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.bookId} book={book} />)
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-gray-300 py-16 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No books found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {activeTab === "read"
                ? "You haven't added any read books yet."
                : "Your wishlist is currently empty."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTabs;
