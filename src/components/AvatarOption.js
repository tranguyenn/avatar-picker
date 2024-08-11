import React from "react";

function AvatarOption({ label, bodyDetails, index,selectPicture,bodyClass,avatarImages,selectedValue }) {
 
  return (
    <>
      <div className="list-section">
        <h1>{label}</h1>
        <div className="part-list-container">
          <div className="part-list body">
            <div className="part-list-content">
              {bodyDetails.map((detail) => (
                <div key={detail.imgAdd} className={detail.selected ? "selected":"non"} onClick={selectPicture}>
                  <img
                    src={`character${detail.imgAdd}`}
                    alt=""
                    height="60"
                    className={`${bodyClass}`}
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
