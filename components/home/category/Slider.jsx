import React from "react";
import { useRef } from "react";
import CategoryButton from "./CategoryButton";
import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const clickHandler1 = () => {
    ref1.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const clickHandler2 = () => {
    ref2.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const clickHandler3 = () => {
    ref3.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const clickHandler4 = () => {
    ref4.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <section className="mt-4 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row  md:space-x-10 items-center justify-center p-4 ">
        <section className=" w-full h-[250px] hidden md:block  mb-10 md:w-[250px] md:h-[350px] relative ">
          <Image
            layout="fill"
            src="/images/logo.png"
            className=" shadow   object-cover rounded "
            alt=""
          />
        </section>
        <main className="flex flex-no-wrap w-full md:w-3/4 h-[300px] space-x-4 overflow-hidden relative">
          {[
            "https://c4.wallpaperflare.com/wallpaper/921/360/969/water-lily-4k-pc-hd-download-wallpaper-preview.jpg",
            "https://2.bp.blogspot.com/-XB1qF1NISNk/XGso08fb21I/AAAAAAAACns/6xEQJA4q50sG0sj6bljLT2ivYiURCqTKQCKgBGAs/w0/lotus-nature-plant-4K-158.jpg",
            "https://2.bp.blogspot.com/-XB1qF1NISNk/XGso08fb21I/AAAAAAAACns/6xEQJA4q50sG0sj6bljLT2ivYiURCqTKQCKgBGAs/w0/lotus-nature-plant-4K-158.jpg",
            "https://2.bp.blogspot.com/-XB1qF1NISNk/XGso08fb21I/AAAAAAAACns/6xEQJA4q50sG0sj6bljLT2ivYiURCqTKQCKgBGAs/w0/lotus-nature-plant-4K-158.jpg",
          ].map((image, index) => {
            return (
              <img
                key={index}
                className=" w-full flex-shrink-0 h-full rounded object-cover m-auto"
                src={image}
                ref={
                  index === 0
                    ? ref1
                    : index === 1
                    ? ref2
                    : index === 2
                    ? ref3
                    : ref4
                }
              />
            );
          })}
        </main>
      </div>
      <footer className="flex">
        <CategoryButton clickHandler={clickHandler1} text="p1" />
        <CategoryButton clickHandler={clickHandler2} text="p2" />
        <CategoryButton clickHandler={clickHandler3} text="p3" />
        <CategoryButton clickHandler={clickHandler4} text="p4" />
      </footer>
    </section>
  );
}
