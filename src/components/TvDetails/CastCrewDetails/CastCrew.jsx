import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loader from "../../../assets/loadingold.svg";
import "./CastCrew.css";

const CastCrew = (props) => {
  let obj = props;
  let CastCrewData = obj.castcrewdata;
  const ImageUrl = "https://image.tmdb.org/t/p/w45/";
  const [layoutchange, setLayoutChange] = useState(false);
  const styleCast = {
    borderBottomColor: !layoutchange ? "#039be5" : "",
    color: !layoutchange ? "rgb(31,31,31)" : "",
  };
  const styleCrew = {
    borderBottomColor: layoutchange ? "#039be5" : "",
    color: layoutchange ? "rgb(31,31,31)" : "",
  };
  return (
    <div className="castCrew">
      <div className="heading">
        <h2
          className="cast"
          style={styleCast}
          onClick={() => setLayoutChange(false)}
        >
          Cast
        </h2>
        <h2
          className="crew"
          style={styleCrew}
          onClick={() => setLayoutChange(true)}
        >
          Crew
        </h2>
      </div>
      <div className="results">
        {!layoutchange ? (
          <div className="cast  fadeIn">
            {CastCrewData && (CastCrewData.cast.length) ?
              CastCrewData.cast.map((Element) => (
                <div className="castCard" key={Element.id}>
                  <div className="image">
                    <LazyLoadImage
                      src={`${ImageUrl}${Element.profile_path}`}
                      alt=""
                      placeholderSrc={loader}
                      onError={(e) =>
                        (e.target.src =
                          "https://www.azmovies.net/images/noposter.png")
                      }
                    />
                  </div>
                  <div className="details">
                    <h3>{Element.title || Element.name}</h3>
                    <p>{Element.character}</p>
                  </div>
                </div>
              ))
            : <p className="notfound">No Cast Found</p>
            }
          </div>
        ) : (
          <div className="crew fadeout">
            {CastCrewData && (CastCrewData.crew.length) ?
              CastCrewData.crew.map((Element, index) => (
                <div
                  className="crews"
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "",
                  }}
                >
                  <p>{Element.department}</p>
                  <p className="name">{Element.title || Element.name}</p>
                  <p>{Element.job}</p>
                </div>
              ))
            : <p className="notfound">No Crew Found</p>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default CastCrew;
