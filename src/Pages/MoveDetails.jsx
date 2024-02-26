import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getMovieDetails } from "../Api/HandelOneMovei";
import { languageContext } from "../context/language";


const MoveDetails = () => {
  const [movie, setMovie] = useState({});
  const { language } = useContext(languageContext);

  const params = useParams();
  useEffect(() => {
    getMovieDetails(params.id,language)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  });
  // ========================BODY OF MOVEIDETAILS==========================
  return (
    <>
      <h3 style={{ marginTop: "20px" }}>MovieDetails</h3>
      <hr />
      <div className="card mb-3" style={{ width: "80%", margin: "auto" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid rounded-start"
              alt="movie"
              style={{ height: "400px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{movie.original_title}</h4>
              <span>{movie.release_date}</span>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
              </p>
              <p className="card-text" style={{ margin: "10px 0px" }}>
                {movie.overview}
              </p>
              <p>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    margin: "0px 10px",
                    borderRadius: "5px",
                    padding: "0px 10px",
                  }}
                >
                  Action
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    margin: "0px 10px",
                    borderRadius: "5px",
                    padding: "0px 10px",
                  }}
                >
                  Crime
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{
                    margin: "0px 10px",
                    borderRadius: "5px",
                    padding: "0px 10px",
                  }}
                >
                  Thiller
                </button>
              </p>

              <span style={{ marginRight: "70px" }}>
                Language: {movie.original_language}
              </span>
              <span>Duration: 60m</span>
              <p className="card-text">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{ margin: "5px 0px" }}
                >
                  Website
                </button>
                <p>
                  <small className="text-body-secondary">
                    {movie.popularity}
                  </small>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoveDetails;
