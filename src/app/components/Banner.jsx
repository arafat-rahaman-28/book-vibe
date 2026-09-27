import Image from "next/image";
import React from "react";
import bannerImage from "@/app/assets/pngwing 1.png";
const Banner = () => {
  return (
    <section className="mt-12 mx-auto flex min-h-[440px] container items-center justify-between rounded-[18px] bg-[#f5f5f5] px-30 py-12">
      {/* Left Content */}
      <div className="flex flex-col items-start">
        <h1 className="font-serif text-[48px] font-semibold leading-[1.5] tracking-[-1px] text-[#111]">
          Books to freshen up
          <br />
          your bookshelf
        </h1>

        <button className="mt-11 rounded-md bg-[#16c900] px-6 py-4 text-base font-bold text-white transition hover:bg-[#12b000]">
          View The List
        </button>
      </div>

      {/* Book */}
      <div className="flex w-[260px] items-center justify-center">
        {/* <img
          src="/book.png"
          alt="The Dating Playbook For Men"
          className="w-[190px] object-contain"
        /> */}
        <Image src={bannerImage} width={318} alt="Image of a book" />
      </div>
    </section>
  );
};

export default Banner;
