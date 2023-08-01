import { styled } from "styled-components";

const MuseumImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.87) contrast(1.3);
`;

const MuseumPatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: multiply;
  opacity: 100%;
  filter: brightness(1) contrast(1);
`;

const MuseumPatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: color-burn;
  opacity: 70%;
  filter: brightness(1) contrast(1.2);
`;

const MuseumPatten3 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 90%;
  filter: brightness(1) contrast(1);
`;

const MuseumPatten4 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 20%;
  filter: brightness(1) contrast(1);
`;

export { MuseumImage, MuseumPatten1, MuseumPatten2, MuseumPatten3, MuseumPatten4 };
