import { styled } from "styled-components";

const PhotoRagImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.78) contrast(1.3);
`;

const PhotoRagPatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 20%;
  filter: brightness(2) contrast(1);
`;

const PhotoRagPatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: multiply;
  opacity: 50%;
  filter: brightness(1.35) contrast(1);
`;

export { PhotoRagImage, PhotoRagPatten1, PhotoRagPatten2 };
