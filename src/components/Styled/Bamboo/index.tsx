import { styled } from "styled-components";

const BambooImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.89) contrast(1.3);
`;

const BambooPatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: multiply;
  opacity: 100%;
  filter: brightness(1) contrast(1);
`;

const BambooPatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: color-burn;
  opacity: 70%;
  filter: brightness(1.09) contrast(1.2);
`;

const BambooPatten3 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 80%;
  filter: brightness(1.1) contrast(1);
`;

export { BambooImage, BambooPatten1, BambooPatten2, BambooPatten3 };
