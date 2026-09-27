import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="group overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Book Image */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

        {/* Top Information */}
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
          {/* Fiction */}
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#222] shadow-sm backdrop-blur-sm">
            Fiction
          </span>

          {/* Rating */}
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-[#222] shadow-sm backdrop-blur-sm">
            <span>{book.rating}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.06 5.27a.56.56 0 0 0 .47.35l5.64.45c.54.04.76.72.35 1.07l-4.3 3.67a.56.56 0 0 0-.18.56l1.32 5.48c.13.52-.45.94-.91.66l-4.83-2.88a.56.56 0 0 0-.57 0l-4.83 2.88c-.46.28-1.04-.14-.91-.66l1.32-5.48a.56.56 0 0 0-.18-.56l-4.3-3.67c-.41-.35-.19-1.03.35-1.07l5.64-.45a.56.56 0 0 0 .47-.35l2.06-5.27Z"
              />
            </svg>
          </div>
        </div>

        {/* Image Bottom Info */}
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-sm font-medium text-white/80">Featured Book</p>

          <h3 className="mt-1 font-serif text-2xl font-bold text-white">
            {book.bookTitle}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-[#f1fbf0] px-4 py-2 text-sm font-medium text-[#16bd00]">
            {book.tags[0]}
          </span>

          <span className="rounded-full bg-[#f1fbf0] px-4 py-2 text-sm font-medium text-[#16bd00]">
            {book.tags[1]}
          </span>
        </div>

        {/* Author */}
        <div className="mt-5 text-[16px] text-[#555]">
          <p className="font-bold text-[#333]">{book.bookName}</p>
          By : <span className="font-medium text-[#333]">{book.author}</span>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-dashed border-[#d5d5d5]" />

        {/* Button */}
        <Link href={`/books/${book.bookId}`}>
          <button className="w-full cursor-pointer rounded-[12px] bg-black py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#16bd00] hover:shadow-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
