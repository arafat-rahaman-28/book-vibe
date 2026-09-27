import Image from "next/image";
import React from "react";
import ReadButton from "./ReadButton";
import WishlistButton from "./WishlistButton";

const BookDetails = ({ book }) => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        {/* Book Image */}
        <div className="group flex h-[564px] items-center justify-center overflow-hidden rounded-2xl bg-[#f5f6f7] p-8 sm:h-[500px] md:h-[720px]">
          <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <Image
              src={book.image}
              alt={book.bookName}
              width={425}
              height={564}
              className="object-contain"
            />
          </div>
        </div>

        {/* Book Information */}
        <div className="flex flex-col">
          {/* Title and Author */}
          <div>
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#202020] sm:text-4xl">
              {book.bookName}
            </h1>

            <p className="mt-3 text-base text-[#555]">
              By : <span className="font-medium">{book.author}</span>
            </p>
          </div>

          {/* Category */}
          <div className="mt-5 border-y border-[#e5e5e5] py-3">
            <p className="text-[15px] font-medium text-[#444]">
              {book.category || "Fiction"}
            </p>
          </div>

          {/* Review */}
          <div className="mt-5">
            <p className="text-sm leading-7 text-[#666]">
              <span className="font-semibold text-[#222]">Review: </span>
              {book.review || "No review available."}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="mr-1 text-sm font-semibold text-[#222]">Tag</span>

            {book.tags?.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-[#f0faf1] px-4 py-1.5 text-sm font-medium text-[#16a34a] transition-colors duration-200 hover:bg-[#dcfce7]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-[#e5e5e5]" />

          {/* Book Details */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[#777]">Number of Pages:</span>
              <span className="font-semibold text-[#222]">
                {book.totalPages ?? "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-[#777]">Publisher:</span>
              <span className="text-right font-semibold text-[#222]">
                {book.publisher || "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-[#777]">Year of Publishing:</span>
              <span className="font-semibold text-[#222]">
                {book.yearOfPublishing ?? "N/A"}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-[#777]">Rating:</span>
              <span className="font-semibold text-[#222]">
                {book.rating ?? "N/A"}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <ReadButton book={book}></ReadButton>

            <WishlistButton book={book}></WishlistButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
