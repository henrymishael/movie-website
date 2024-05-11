"use client";
import { Movie } from "@/typings/type";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div
      className='overflow-hidden cursor-pointer relative min-h-[40vh]'
      ref={emblaRef}
    >
      <div className='flex '>
        {movies.map((movie) => (
          <div key={movie?.id} className='flex-full min-w-0 relative'>
            <Image
              src={getImagePath(movie?.backdrop_path, true)}
              alt={movie?.title}
              width={1920}
              height={1080}
              className='min-h-[40vh] '
            />
            <div className=' md:inline absolute top-0 md:pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent p-10 space-y-5 text-white'>
              <h2 className='sm:text-3xl md:text-5xl font-bold max-w-xl'>
                {movie?.title}
              </h2>
              <p className='sm:max-w-sm md:max-w-xl line-clamp-3'>
                {movie?.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-[#121212]' />
    </div>
  );
};

export default HeroCarousel;
