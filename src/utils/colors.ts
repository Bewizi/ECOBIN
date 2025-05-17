const hex = "#54B469";
const white = "#ffffff";
const gray = "#E7EAF0";
const lightGreen = "#EFF5F0";
const britishGreen = "#1D3D23";
const _ =
  "bg-[#54B469] bg-[#ffffff] bg-[#EFF5F0] bg-[#E7EAF0]  text-[#54B469] border-[#54B469] outline-[#54B469] text-[#fffff] text-[#1D3D23]";

export const colors = {
  bgClass: `bg-[${hex}]`,
  bgGray: `bg-[${gray}]`,
  bgLightGreen: `bg-[${lightGreen}]`,
  textBritishGreen: `text-[${britishGreen}]`,
  button: {
    primary: `border-2 border-[${hex}] rounded-xl mb-5 bg-white text-[${hex}]`,
    secondary: `rounded-xl mb-5 bg-[${hex}] text-[${white}] text-white`,
  },
};
