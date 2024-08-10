import { bodyOptions } from "../constants/data";

export function generateAvaOptions() {
  const result = [];
  bodyOptions.forEach((body) => {
    let option = {
      bodyId: body.label,
      index: body.index,
      address: body.address,
      details: [],
    };
    for (let index = 0; index < body.total; index++) {
      option.details.push(`${body.address}${index + 1}.png`);
    }

    result.push(option);
  });

  return result;
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
