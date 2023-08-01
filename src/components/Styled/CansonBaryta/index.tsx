import { styled } from "styled-components";

const CansonBarytaImage = styled.img`
  position: absolute;
  rotate: 105.5deg;
  transform-origin: right top;
  z-index: 9;
  filter: brightness(0.8) contrast(1.3);
`;

const CansonBarytaPatten1 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: screen;
  opacity: 15%;
  filter: brightness(1) contrast(1);
`;

const CansonBarytaPatten2 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 100%;
  filter: brightness(0.5) contrast(1);
`;

const CansonBarytaPatten3 = styled.img`
  position: absolute;
  z-index: 13;
  mix-blend-mode: soft-light;
  opacity: 60%;
  filter: brightness(1.3) contrast(1.3);
`;

export { CansonBarytaImage, CansonBarytaPatten1, CansonBarytaPatten2, CansonBarytaPatten3 };
