import { useEffect, useState } from "react";
import "./App.css";
import AvatarOption from "./components/AvatarOption";
import AvatarPicture from "./components/AvatarPicture";
import Tittle from "./components/Tittle";
import { generateAvaOptions, generateRandomAvatar } from "./utils/CommonUtils";

const avatar = {
  body: "/body/1.png",
  eyes: "",
  hair: "",
  facial: "",
  mouth: "",
  eyebrows: "",
  hat: "",
  neck: "",
  earrings: "",
  glasses: "",
  layer_1: "",
  layer_2: "",
  layer_3: "",
};
const Z_INDEX = {
  body: 1,
  eyes: 2,
  hair: 3,
  facial: 4,
  mouth: 5,
  eyebrows: 6,
  hat: 7,
  neck: 8,
  earrings: 9,
  glasses: 10,
  layer_1: 11,
  layer_2: 12,
  layer_3: 13,
};
const retrievedOptions = generateAvaOptions();
function App() {
  const initAvatar = generateRandomAvatar();
  const [displayAvatar, setDisplayAvatar] = useState(initAvatar);
  const [displayOption, setDisplayOption] = useState(retrievedOptions);

  console.log("check key"+Object.keys(avatar));
  const handleRandomize = () => {
    const randomAvatar=generateRandomAvatar()
    setDisplayAvatar({...displayAvatar,randomAvatar});
  };


  const onSelectPicture = (key, value) => {
    console.log(key + "value" + value);
    setDisplayAvatar((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  const avatarImage = Object.keys(displayAvatar).reduce((result, key) => {
    console.log(result+" result "+key+" key");
    result = {
      ...result,
      [key]: { path: displayAvatar[key], zIndex: Z_INDEX[key] },
    };
    return result;
  },{});
  return (
    <>
      <Tittle />
      <div className="avatar-group">
        <div>
          <div className="avatar-container">
            <AvatarPicture images={avatarImage} />
            <button className="btn-random" onClick={handleRandomize}>
              Randomize
            </button>
          </div>
        </div>
        <div className="avatar-option">
          {displayOption.map((option) => (
            <AvatarOption
              key={option.bodyId}
              label={option.bodyLabel}
              bodyDetails={option.details}
              bodyClass={option.bodyClass}
              selectedValue={displayAvatar[option.bodyId]}
              onSelectPicture={(detail) =>
                onSelectPicture(option.bodyId, detail)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
