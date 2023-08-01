import layer from "assets/CansonBaryta/layer.png";
import paper from "assets/CansonBaryta/paper.png";
import layer2 from "assets/CansonBaryta-n/layer.png";
import paper2 from "assets/CansonBaryta-n/texture.png";
import mask from "assets/CansonBaryta/mask.png";
import texture from "assets/CansonBaryta/texture.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  CansonBarytaImage,
  CansonBarytaPatten1,
  CansonBarytaPatten2,
  CansonBarytaPatten3,
} from "../../Styled/CansonBaryta";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const CansonBaryta: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <CansonBarytaPatten1 id='overlay_pattern_1' src={mask} />
          <CansonBarytaPatten2 id='overlay_pattern_2' src={isMargin ? paper : paper2} />
          <CansonBarytaPatten3 id='overlay_pattern_2' src={isMargin ? texture : paper2} />
          <CansonBarytaImage
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

export default CansonBaryta;
