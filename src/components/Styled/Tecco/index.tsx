import { styled } from "styled-components";

const TeccoImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.85) contrast(1.3);
`;

const TeccoPatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 100%;
  filter: brightness(1) contrast(1);
`;

const TeccoPatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 40%;
  filter: brightness(1) contrast(1);
`;

export { TeccoImage, TeccoPatten1, TeccoPatten2 };
