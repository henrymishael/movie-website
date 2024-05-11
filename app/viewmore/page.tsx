import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import React from "react";
interface Props {
  searchParams: {
    title: string;
  };
}

const ViewMorePage = async ({ searchParams: { title } }: Props) => {
  let movies: any = null;
  if (title === "Now Playing") {
    movies = await getNowPlayingMovies();
  } else if (title === "Upcoming") {
    movies = await getUpcomingMovies();
  } else if (title === "Top rated") {
    movies = await getTopRatedMovies();
  } else if (title === "Popular") {
    movies = await getPopularMovies();
  }
  return (
    <div className='py-10'>
      <h2 className='text-4xl  font-bold px-10 mb-5'>Results of {title}</h2>
      <MovieContainer title={title} movies={movies} isVertical={true} />
    </div>
  );
};

export default ViewMorePage;
