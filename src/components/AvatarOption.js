import React from "react";

function AvatarOption({ label, bodyDetails,bodyClass,selectedValue,onSelectPicture }) {
 
  return (
    <>
      <div className="list-section">
        <h1>{label}</h1>
        <div className="part-list-container">
          <div className="part-list body">
            <div className="part-list-content">
              {bodyDetails.map((detail) => (
                <div 
                  key={detail} 
                  className={detail===selectedValue ? "selected":"non"} 
               
                  data-path={detail}
                  // onClick={(event)=>{
                  //   const path=event.currentTarget.getAttribute("data-path");

                  // }}
                  onClick={()=>onSelectPicture(detail)}
                  >
                  
                  <img
                    src={`character${detail}`}
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
