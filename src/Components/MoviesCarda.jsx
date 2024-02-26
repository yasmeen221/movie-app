/* eslint-disable react/prop-types */
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavMovie } from "../store/slice/watchLists";

// import { addFavMovie } from "../store/slice/watchLists";

const MoviesCarda = ({ movie }) => {
  const navigate = useNavigate();

  // const moveWatch = useSelector((state) => state.watchLists.list);
  const dispatch = useDispatch();

  // const listsMovies = moveWatch.map((fav) => {
  //   return fav.id === movie.id;
  // });

  // console.log(moveWatch)
  // const handleToggleFavorite = () => {
  //   if (listsMovies) {
  //     dispatch(removeFavMovie(movie.id));
  //   } else {
  //     dispatch(addFavMovie(movie));
  //   }
  //   console.log(movie.id);
  // };

  return (
    <>
      <Card style={{ width: "15rem", borderRadius: "10px" }}>
        <Card.Img
          style={{ height: "15rem", borderRadius: "10px" }}
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          onClick={() => {
            navigate(`/movedetails/${movie.id}`);
          }}
        />
        <p
          style={{
            marginTop: "-20px",
            color: "white",
            backgroundColor: "black",
            border: "3px solid green",
            borderRadius: "50px",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
          }}
        >
          {`${movie.vote_count}%`}
        </p>

        <Card.Body>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>{movie.release_date}</Card.Text>
          <Card.Text>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => {
                dispatch(addFavMovie(movie));
              }}
              style={{ float: "right", color: "#ebc800" }}
            />

            {movie.vote_count}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MoviesCarda;
