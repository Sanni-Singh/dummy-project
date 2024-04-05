import { useState } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Card = ({element , imageUrl}) => {
    const [imageLoad , setImageLoad] = useState(0);
  return (
    <div className="card" key={element.id}>
      <NavLink to={`/movieDetails/${element.id}`}>
        <div className="poster_rating">
          {/* {
                                                                    imageLoading ? <div className='loader' ></div> : ""
                                                                    // <img 
                                                                    //         src={ `${imageUrl}${element.poster_path}`} 
                                                                    //         alt=""
                                                                    // />
                                                                } */}
                                                                {
                                                                    imageLoad ? 
                                                                    <img src={`${imageUrl}${element.poster_path}`} alt="" onLoad={() => setImageLoad(true)} />
                                                                    : <p>Loading...</p>
                                                                }
         


          <div className="rating">
            <p className="star">⭐</p>
            <p className="num">{Number(element.vote_average).toFixed(1)}</p>
          </div>
        </div>
      </NavLink>
      <div className="name_year">
        <p className="name">
          <NavLink to={`/movieDetails/${element.id}`} className="navlink">
            {element.title.length > 26
              ? element.title.slice(0, 26) + "..."
              : element.title}
          </NavLink>
        </p>
        <p className="year">{element.release_date.slice(0, 4)}</p>
      </div>
    </div>
  );
};

export default Card;
