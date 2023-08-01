import { styled } from "styled-components";

const GermanEtchingImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.89) contrast(1.3);
`;

const GermanEtchingPatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: multiply;
  opacity: 100%;
  filter: brightness(1.1) contrast(1);
`;

const GermanEtchingPatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: color-burn;
  opacity: 20%;
  filter: brightness(1.11) contrast(1.1);
`;

const GermanEtchingPatten3 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 50%;
  filter: brightness(1.12) contrast(1);
`;

const GermanEtchingPatten4 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 10%;
  filter: brightness(1) contrast(1) hue-rotate(90deg);
`;

export {
  GermanEtchingImage,
  GermanEtchingPatten1,
  GermanEtchingPatten2,
  GermanEtchingPatten3,
  GermanEtchingPatten4,
};
