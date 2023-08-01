import layer from "assets/CansonMuseumCanvas/layer.png";
import paper from "assets/CansonMuseumCanvas/paper.png";
import texture from "assets/CansonMuseumCanvas/texture.png";
import layer2 from "assets/CansonMuseumCanvas-n/layer.png";
import paper2 from "assets/CansonMuseumCanvas-n/texture.png";
import texture2 from "assets/CansonMuseumCanvas-n/texture.png";
import mask from "assets/CansonMuseumCanvas/mask.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  MuseumImage,
  MuseumPatten1,
  MuseumPatten2,
  MuseumPatten3,
  MuseumPatten4,
} from "../../Styled/CansonMuseumCanvas";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const Museum: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <MuseumPatten1 id='overlay_pattern_1' src={isMargin ? texture : texture2} />
          <MuseumPatten2 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <MuseumPatten3 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <MuseumPatten4 id='overlay_pattern_2' src={mask} />
          <MuseumImage
            id='content'
            src={imageUrl}
            style={{
              top,
              right,
              width,
              height,
              maxWidth: width,
            }}
          />
        </>
      ) : null}
      <Paper id='texture' src={isMargin ? paper : paper2} />
      <BackgroundBoard id='background' src={isMargin ? layer : layer2} draggable={false} />
    </Container>
  );
};

export default Museum;
