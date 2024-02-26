/* eslint-disable react/prop-types */


import MoviesCarda from "../Components/MoviesCarda";

const MoveWatch = ({ movie }) => {

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movie.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MoviesCarda movie={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MoveWatch;
