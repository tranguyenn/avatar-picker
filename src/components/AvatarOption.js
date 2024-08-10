import React from "react";

function AvatarOption({ label, bodyDetails, index,selectPicture }) {
  return (
    <>
      <div className="list-section">
        <h1>{label}</h1>
        <div className="part-list-container">
          <div className="part-list body">
            <div className="part-list-content">
              {bodyDetails.map((detail) => (
                <div key={detail} className="" onClick={selectPicture}>
                  <img
                    src={`character/${detail}`}
                    alt=""
                    height="60"
                    className="img-center"
                    style={{ top: "50%" }}
                  />
                </div>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvatarOption;
