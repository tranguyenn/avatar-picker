import { bodyOptions } from "../constants/data";
const avatar = {
  body: "",
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
export function generateAvaOptions() {
  const result = [];

  bodyOptions.forEach((body) => {
    let option = {
      bodyId: body.id,
      bodyLabel:body.label,
      bodyClass:body.id,
      index: body.index,
      address: body.address,
      details: [],
    };
    for (let index = 0; index < body.total; index++) {
        let detailOption=`${body.address}${index + 1}.png`;
      option.details.push(detailOption);
    }
    result.push(option);
  });
  return result;
}
function getRandomArbitrary(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
export function generateRandomAvatar() {
  const result = avatar;
  Object.keys(result).forEach((key)=>{
     const totalOPtions=bodyOptions.find(opt=>opt.id===key);
     result[key]=`${totalOPtions.address}${getRandomArbitrary(totalOPtions.total)}.png`
     console.log("keyrandom"+result[key]);
    })
  return result;
}




