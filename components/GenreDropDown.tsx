import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Genres } from "@/typings/type";

interface CustomRequestInit extends RequestInit {
  next?: {
    revalidate: number;
  };
}

const genreArray = [
  { id: 101, name: "Action" },
  { id: 102, name: "Animation" },
];
const GenreDropDown = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: CustomRequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;
  // console.log(data);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='text-white flex items-center text-sm font-medium'>
        Genre <ChevronDown className='ml-1' size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex  flex-col -space-y-1'>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        {data?.genres?.map((genre) => (
          <DropdownMenuItem key={genre?.id}>
            <Link
              href={`/genre/${genre?.id}?genre=${genre?.name}`}
              className=''
            >
              {genre?.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropDown;
