const dic = {
  name: ["string"],
  desc: ["string"],
  info: ["string"],
  location: ["string"],
  putIn: ["url"],
  takeOut: ["url"],
  top: ["max:100,num", "min:0,num", "numeric"],
  bottom: ["max:100,num", "min:0,num", "numeric"],
  left: ["max:100,num", "min:0,num", "numeric"],
  right: ["max:100,num", "min:0,num", "numeric"],
  width: ["max:100,num", "min:0,num", "numeric"],
  height: ["max:100,num", "min:0,num", "numeric"],
  y: ["max:900,num", "min:0,num", "numeric"],
  x: ["max:1600,num", "min:0,num", "numeric"],
  rotation: ["max:360,num", "min:0,num", "numeric"],
  range: [{ regex: /^(-?[0-9]{1,}),(-?[0-9]{1,})$/ }, "required"],
  vector: ["string"],
  titleTop: ["max:100,num", "min:0,num", "numeric"],
  titleLeft: ["max:100,num", "min:0,num", "numeric"],
  pointerCoordinates: [
    { regex: /^([0-9][0-9]?|100),([0-9][0-9]?|100)$/ }
  ],
};

//
export const rules = (elem) => {
  let output;
  for (let item in dic) {
    if (item === elem) {
      output = [...dic[item], "required"];
      return output;
    }
  }

  return "required";
};
