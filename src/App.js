import { useEffect, useState } from "react";
import "./App.css";
import AvatarOption from "./components/AvatarOption";
import AvatarPicture from "./components/AvatarPicture";
import Tittle from "./components/Tittle";
import { generateAvaOptions, generateRandomAvatar } from "./utils/CommonUtils";

const retrievedOptions = generateAvaOptions();
function App() {
  const [avatarImages, setAvatarImages] = useState(retrievedOptions.randoms);
  const [displayOption, setDisplayOption] = useState(retrievedOptions.options);
  const [changingOpt, setChangingOpt] = useState({});
  const firstRandomAva = generateRandomAvatar();
 
  const handleRandomize = () => {
    const randomnessOptions=generateAvaOptions();
    setAvatarImages(randomnessOptions.randoms);
    setDisplayOption(randomnessOptions.options);
  };
  // useEffect(() => {
  //   setAvatarImages(retrievedOptions.randoms);
  // }, []);
  useEffect(() => {
    console.log(avatarImages);
    if (avatarImages) {
      const newAvaImg = avatarImages.slice();
      for (let index = 0; index < newAvaImg.length; index++) {
        if (newAvaImg[index].address.includes(changingOpt.bodyClass)) {
          newAvaImg[index].address = changingOpt.address;
          newAvaImg[index].index = changingOpt.index;
        }
      }
    }
  }, [displayOption]);
  console.log(retrievedOptions);
  const handleSelect = (e) => {
    console.log(e.target);
    if (e.target.className.includes("selected")) {
      console.log("123");
      return;
    } else {
      const displayNew = displayOption.slice();
      const srcAdd = e.target.src;
      for (let index = 0; index < displayNew.length; index++) {
        const details = displayNew[index].details;

        if (srcAdd.includes(displayNew[index].bodyClass)) {
          console.log("details[a].imgAdd");
          let unselected = 0;
          for (let a = 0; a < details.length; a++) {
            if (srcAdd.endsWith(details[a].imgAdd)) {
              console.log(details[a]);
              details[a].selected = true;
              unselected += 1;
            } else if (details[a].selected) {
              details[a].selected = false;
              unselected += 1;
            }
            if (unselected > 1) {
              const changingOption = {
                bodyClass: displayNew[index].bodyClass,
                index: displayNew[index].index,
                address: details[a].imgAdd,
              };
              setChangingOpt(changingOption);
              setDisplayOption(displayNew);
              return;
            }
          }
        }
      }
    }
  };

  return (
    <>
      <Tittle />
      <div className="avatar-group">
        <div>
          <div className="avatar-container">
            <AvatarPicture images={avatarImages} />
            <button className="btn-random" onClick={handleRandomize}>
              Randomize
            </button>
          </div>
        </div>
        <div className="avatar-option">
          {displayOption.map((option) => (
            <AvatarOption
              key={option.bodyId}
              label={option.bodyId}
              bodyDetails={option.details}
              index={option.index}
              bodyClass={option.bodyClass}
              selectPicture={handleSelect}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
