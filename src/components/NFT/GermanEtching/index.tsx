import layer from "assets/GermanEtching/layer.png";
import paper from "assets/GermanEtching/paper.png";
import texture from "assets/GermanEtching/texture.png";
import layer2 from "assets/GermanEtching-n/layer.png";
import paper2 from "assets/GermanEtching-n/texture.png";
import texture2 from "assets/GermanEtching-n/texture.png";
import mask from "assets/GermanEtching/mask.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  GermanEtchingImage,
  GermanEtchingPatten1,
  GermanEtchingPatten2,
  GermanEtchingPatten3,
  GermanEtchingPatten4,
} from "../../Styled/GermanEtching";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const GermanEtching: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <GermanEtchingPatten1 id='overlay_pattern_1' src={isMargin ? texture : texture2} />
          <GermanEtchingPatten2 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <GermanEtchingPatten3 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <GermanEtchingPatten4 id='overlay_pattern_2' src={mask} />
          <GermanEtchingImage
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

export default GermanEtching;
