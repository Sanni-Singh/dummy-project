import { useParams } from "react-router-dom";
import CommonSectionMovie from "../CommonSection/CommonSectionMovies";
import { ApiCall } from "../../utils/Api";
import { useEffect, useState } from "react";
import "./Movies.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Movies = () => {
  const value = useParams();
  const [totalPages, setTotalPages] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (value.name === "New Movies") {
      setUrl("movie/upcoming");
    }
    if (value.name === "Popular Movies") {
      setUrl("movie/popular");
    }
    if (value.name === "Top Rated Movies") {
      setUrl("movie/top_rated");
    }
    if (value.name === "Featured Movies") {
      setUrl("movie/now_playing");
    }
    setCurrentPage(1);
  }, [value.name]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Apicall = () => {
    ApiCall(`${url}?page=${currentPage}`).then((Response) => {
      setMovieData([...Response.results]);
    });
  };

  const total_pages = () => {
    ApiCall(`${url}`).then((Response) => {
      setTotalPages(Response.total_pages);
    });
  };

  useEffect(() => {
    Apicall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, currentPage]);

  useEffect(() => {
    total_pages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, totalPages]);

  const handleChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="movies">
      <CommonSectionMovie data={movieData} heading={value.name} />
      <div className="pagination">
        <Stack spacing={200}>
          <Pagination
            count={totalPages > 500 ? 500 : totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            className="page"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Movies;
