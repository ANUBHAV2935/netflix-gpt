import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    return (
        <div className="bg-black text-white p-4 ">
            <h1 className="text-2xl font-bold mb-">{title}</h1>
            <div className="flex overflow-x-scroll">
                {/* Container to hold the cards */}
                <div className="flex">
                    {movies?.map((movie) => (
                        <div
                            key={movie.id}
                            className="flex-shrink-0 w-48 cursor-pointer px-2 "
                        >
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
