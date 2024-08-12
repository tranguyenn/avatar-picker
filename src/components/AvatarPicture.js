import React from "react";

function AvatarPicture({images}) {
  console.log("img "+images);
  return (
    <div>
      <div className="avatar-picture">
       {Object.values(images).map((imge=>(
         <img
         key={imge.path}
         src={`character${imge.path}`}
        //  src={`character/body/1.`}
         alt=""
         width="260"
         style={{zIndex: imge.zIndex, position: 'absolute', left: '0px', top: '0px'}}
       />
       )))}
        
      </div>
    </div>
  );
}

export default AvatarPicture;
