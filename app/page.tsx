import CarouselBanner from "@/components/CarouselBanner";
import MovieContainer from "@/components/MovieContainer";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import Image from "next/image";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBanner />
      <div className='flex flex-col space-y-2'>
        <MovieContainer
          movies={nowPlayingMovies}
          title='Now Playing'
          isVertical={false}
        />
        <MovieContainer
          movies={upcomingMovies}
          title='Upcoming'
          isVertical={false}
        />
        <MovieContainer
          movies={topRatedMovies}
          title='Top rated'
          isVertical={false}
        />
        <MovieContainer
          movies={popularMovies}
          title='Popular'
          isVertical={false}
        />
      </div>
    </main>
  );
}
