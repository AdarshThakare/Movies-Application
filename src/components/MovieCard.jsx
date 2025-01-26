import React from "react";

const MovieCard = ({
  movie: {
    title,
    id,
    vote_average,
    poster_path,
    release_date,
    original_language,
  },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt="movie card"
      />
      <div className="mt-4">
        <h3 className="text-xl text-orange-400 tracking-wider">{title}</h3>
        <div className="content pt-2">
          <div className="rating flex flex-row justify-between gap-3">
            <div className="flex flex-row gap-2 items-center">
              <img src="star.svg" alt="star icon" className="" />
              <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            </div>
            <span className="text-2xl">|</span>
            <p className="lang text-lg">{original_language}</p>
            <span className="text-2xl">|</span>
          </div>

          <div>
            <p className="year text-lg">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
