import React from "react";

function AvatarPicture({images}) {
  return (
    <div>
      <div className="avatar-picture">
       {images.map((imge=>(
         <img
         key={imge.address}
         src={`character${imge.address}`}
         alt=""
         width="260"
         style={{zIndex: imge.index, position: 'absolute', left: '0px', top: '0px'}}
       />
       )))}
        
      </div>
    </div>
  );
}

export default AvatarPicture;
