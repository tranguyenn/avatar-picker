import { bodyOptions } from "../constants/data";

export function generateAvaOptions() {
  const result = [];
  const result1={options:[],randoms:[]};
  bodyOptions.forEach((body) => {
     const selectedNum=getRandomArbitrary(body.total);
    let option = {
      bodyId: body.id,
      bodyLabel:body.label,
      bodyClass:body.id,
      index: body.index,
      address: body.address,
      details: [],
    };
    for (let index = 0; index < body.total; index++) {
        let detailOption={imgAdd: `${body.address}${index + 1}.png`,selected: index+1===selectedNum? true : false};
      option.details.push(detailOption);
    }
    let randomOption = {
        index: body.index,
        address: `${body.address}${selectedNum}.png`,
      };
    result1.options.push(option);
    result1.randoms.push(randomOption);
    result.push(option);
  });
  return result1;
}
function getRandomArbitrary(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}
export function generateRandomAvatar() {
  const result = [];
  bodyOptions.forEach((body) => {
    let randomOption = {
      index: body.index,
      address: `${body.address}${getRandomArbitrary(body.total)}.png`,
    };
    result.push(randomOption);
  });

  return result;
}




