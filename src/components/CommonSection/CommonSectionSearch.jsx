import "./CommonSection.css";
import { FaBars } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import loader from "../../assets/loadingold.svg";


const CommonSectionSearch = (props) => {
  let obj = props;
  const searchData = obj.data ? [...obj.data] : "";
  const truncateText = (text) => {
    return text.length > 26 ? `${text.slice(0, 26)}...` : text;
  };
  const heading = obj.heading;
  const [layoutchange, setLayoutChange] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const styleLayout1 = {
    backgroundColor: !layoutchange ? "#039BE5" : "",
    color: !layoutchange ? "white" : "",
  };
  const styleLayout2 = {
    backgroundColor: layoutchange ? "#039BE5" : "",
    color: layoutchange ? "white" : "",
  };

  return (
    <div className="CommonSection">
      <div className="heading">
        <h1>{heading}</h1>
      </div>
      <div className="layout-change-buttons">
        <BsFillGrid3X3GapFill
          className="layout1"
          style={styleLayout1}
          onClick={() => setLayoutChange(false)}
        />
        <FaBars
          className="layout2"
          style={styleLayout2}
          onClick={() => setLayoutChange(true)}
        />
      </div>
      <div className="results">
        {!layoutchange ? (
          <div className="result-layout1 fadeIn">
            {searchData && searchData.length > 0
              ? searchData.map((element) => (
                  <div className="card" key={element.id}>
                    <NavLink to={(element.media_type === "movie") ?`/movieDetail/${element.id}` : `/TvShowDetail/${element.id}`}>
                      <div className="poster_rating">
                          <LazyLoadImage src={`${imageUrl}${element.poster_path}`} alt=""  
                          placeholderSrc={loader} onError={(e) => e.target.src = "https://www.azmovies.net/images/noposter.png" }  />
                        <div className="rating">
                          <p className="star">⭐</p>
                          <p className="num">
                            {(Number(element.vote_average)) ? Number(element.vote_average).toFixed(1) : 0}
                          </p>
                        </div>
                      </div>
                    </NavLink>
                    <div className="name_year">
                      <p className="name">
                        <NavLink to={(element.media_type === "movie") ?`/movieDetail/${element.id}` : `/TvShowDetail/${element.id}`}
                          className="navlink"
                        >
                          {truncateText(element.title || element.name)}

                            
                        </NavLink>
                      </p>
                      <p className="year">{element.release_date ? element.release_date.slice(0, 4) : ''}</p>
                    </div>
                  </div>
                ))
              : <p style={{fontSize : "14px" , color : "rgb(51,51,51)" , fontWeight : "300"}}>Sorry, no movies or tv shows where found for this search term.</p>}
          </div>
        ) : (
          <div className="result-layout2 fadeout">
            {searchData && searchData.length > 0
              ? searchData.map((element) => (
                  <div className="card" key={element.id}>
                    <NavLink to={(element.media_type === "movie") ?`/movieDetail/${element.id}` : `/TvShowDetail/${element.id}`}>
                      <div className="image">
                      <LazyLoadImage src={`${imageUrl}${element.poster_path}`} alt=""  
                          placeholderSrc={loader} onError={(e) => e.target.src = "https://www.azmovies.net/images/noposter.png" } />
                      </div>
                    </NavLink>
                    <div className="details">
                      <div className="name_year">
                        <p className="name">
                          <NavLink
                           to={(element.media_type === "movie") ?`/movieDetail/${element.id}` : `/TvShowDetail/${element.id}`}
                            className="navlink"
                          >
                            {truncateText(element.title || element.name)}
                          </NavLink>
                        </p>
                        <p className="year">
                        {element.release_date ? element.release_date.slice(0, 4) : ''}
                        </p>
                      </div>
                      <div className="rating">
                        <p className="star">⭐</p>
                        <p className="num">
                        {(Number(element.vote_average)) ? Number(element.vote_average).toFixed(1) : 0}
                        </p>
                      </div>
                      <div className="overview">
                        <p>{element.overview}</p>
                      </div>
                    </div>
                  </div>
                ))
              : <p style={{fontSize : "14px" , color : "rgb(51,51,51)" , fontWeight : "300"}}>Sorry, no movies or tv shows where found for this search term.</p>}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default CommonSectionSearch;
