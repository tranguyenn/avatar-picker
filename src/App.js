import { useEffect, useState } from "react";
import "./App.css";
import AvatarOption from "./components/AvatarOption";
import AvatarPicture from "./components/AvatarPicture";
import Tittle from "./components/Tittle";
import { generateAvaOptions, generateRandomAvatar } from "./utils/CommonUtils";


const retrievedOptions=generateAvaOptions();
function App() {
  const[avatarImages,setImagesOption]=useState();

  const firstRandomAva=generateRandomAvatar();
  const handleRandomize=()=>{
    setImagesOption(generateRandomAvatar())
  }
  useEffect(()=>{
    setImagesOption(firstRandomAva);
  },[]);
  const handleSelect=(e)=>{
    console.log(e);
  }

  return (
    <>
      <Tittle />
      <div className="avatar-group">
        <div>
          <div className="avatar-container">
            <AvatarPicture images={firstRandomAva} />
            <button className="btn-random" onClick={handleRandomize}>Randomize</button>
          </div>
        </div>
        <div className="avatar-option">
          {retrievedOptions.map(option=>
            <AvatarOption key={option.bodyId} label={option.bodyId} bodyDetails={option.details} index={option.index} selectPicture={handleSelect}  />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
