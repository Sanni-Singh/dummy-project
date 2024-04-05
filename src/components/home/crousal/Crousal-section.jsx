import "./Crousal-section.css";
import Crousal from "./Crousal";

const Crousal_section = () => {
  return (
    <>
      <div className="crousal">
        <div className="backgroundBlackTint">
          <div className="title">
            <h2>Featured Movies</h2>
            <div className="bottom-line">
              <div className="blueline"></div>
            </div>
          </div>
          <div className="crousals">
            <Crousal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Crousal_section;
