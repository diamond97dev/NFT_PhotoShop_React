import { styled } from "styled-components";

const CansonLustreImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.89) contrast(1.3);
`;

const CansonLustrePatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: multiply;
  opacity: 100%;
  filter: brightness(1) contrast(1);
`;

const CansonLustrePatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: color-burn;
  opacity: 70%;
  filter: brightness(1) contrast(1.2);
`;

const CansonLustrePatten3 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 80%;
  filter: brightness(1) contrast(1);
`;

const CansonLustrePatten4 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 70%;
  filter: brightness(1) contrast(1);
`;

const CansonLustrePatten5 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 80%;
  filter: brightness(1) contrast(1);
`;

const CansonLustrePatten6 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 80%;
  filter: brightness(1) contrast(1);
`;

export {
  CansonLustreImage,
  CansonLustrePatten1,
  CansonLustrePatten2,
  CansonLustrePatten3,
  CansonLustrePatten4,
  CansonLustrePatten5,
  CansonLustrePatten6,
};
