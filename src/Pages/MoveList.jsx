import { useContext, useEffect, useState } from "react";
import instance from "../Api/HandelApi";
import MoviesCarda from "../Components/MoviesCarda";
import axios from "axios";
import { languageContext } from "../context/language";

// const translations = {
//   ar: {},
// };

const MoveList = () => {
  const { language } = useContext(languageContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // =============================handel fetch data============================

  // const translate = (key) => {
  //   return translations[language][key] || key;
  // };

  useEffect(() => {
    instance
      .get(`/movie/popular&language=${language}`, {
        params: {
          page: currentPage,
          // query: searchQuery,
        },
      })
      .then((response) => {
        setMovie(response.data.results);
       
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });

    // console.log(language);
    // console.log(movies);
  }, [currentPage, language]);
 


  // ======================Handel pagination===============================
  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  //   // window.history.pushState(null, null, `&page=${newPage}`);
  // };

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const pageParam = params.get('page');
  //   if (pageParam) {
  //     setCurrentPage(parseInt(pageParam, 10));
  //   }
  // }, []);

  // =============================handel search============================

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: "54cad708d0a67a3a1c2b0b9bff908009",
          query: searchQuery,
        },
      })
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((error) => {
        console.error("Error searching movies:", error);
      });
  }, [searchQuery]);

  const handelSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setMovie([]);
      return;
    }
  };
  // =======================BODY OF MOVEILIST=====================
  return (
    <>
      {/* ==================handel search ============== */}
      <div
        className="search-bar"
        style={{
          backgroundColor: "lightgray",
          padding: "20px",
          margin: "20px auto",
        }}
      >
        <h4 style={{ marginBottom: "20px" }}>
          Search about your favorite movie
        </h4>
        <form style={{ width: "50%" }} onSubmit={handelSearch}>
          <input
            style={{ margin: "0px 40px 0px 0px", width: "60%" }}
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="btn"
            style={{
              color: "black",
              backgroundColor: "#d7b700",
              margin: "0px 10px",
              borderRadius: "5px",
              padding: "0px 10px",
            }}
            onClick={handelSearch}
          >
            Search
          </button>
        </form>
      </div>
      {/* {searchQuery} */}
      {/* ==================handel ListMovies ============== */}
      <h1 style={{ marginTop: "30px" }}>MoveiLists</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MoviesCarda movie={movie} page={currentPage} language={language} />
            </div>
          );
        })}
      </div>
      {/* ==================handel pagination ============== */}
      <div
        style={{
          padding: "10px",
          backgroundColor: "#d7b700",
          textAlign: "center",
          margin: "30px",
        }}
      >
        <button
          type="button"
          className="btn btn-warning"
          style={{
            color: "white",
            backgroundColor: "black",
            margin: "0px 10px",
            borderRadius: "5px",
            padding: "0px 10px",
          }}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          type="button"
          className="btn btn-warning"
          style={{
            color: "white",
            backgroundColor: "black",
            margin: "0px 10px",
            borderRadius: "5px",
            padding: "0px 10px",
          }}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MoveList;
