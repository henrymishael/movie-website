"use client";
import { Videos } from "@/typings/type";
import React from "react";
import Youtube, { YouTubeProps } from "react-youtube";

const VideoPlayer = ({ videos }: Videos) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event: any) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: "300px",
    width: "100%",
  };
  return (
    <div>
      <h2 className='text-xl font-bold mb-5'>Oficial videos from Youtube:</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {videos.map((video) => (
          <div
            key={video?.id}
            className='border border-gray-600 rounded-md w-full overflow-hidden relative'
          >
            <p className='text-sm font-medium px-6 py-3'>
              Type: {video?.type} - {video?.official ? "Official" : "General"}{" "}
            </p>
            <Youtube videoId={video?.key} onReady={onPlayerReady} opts={opts} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
