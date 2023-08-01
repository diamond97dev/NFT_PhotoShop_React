import layer from "assets/Tecco/layer.png";
import paper from "assets/Tecco/paper.png";
import layer2 from "assets/Tecco-n/layer.png";
import paper2 from "assets/Tecco-n/paper.png";
import texture from "assets/Tecco/texture.png";
import mask from "assets/Tecco/mask.png";
import texture2 from "assets/Tecco-n/texture.png";
import mask2 from "assets/Tecco-n/mask.png";

import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { TeccoImage, TeccoPatten1, TeccoPatten2 } from "../../Styled/Tecco";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const Tecco: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <TeccoPatten1 id='overlay_pattern_1' src={isMargin ? texture : texture2} />
          <TeccoPatten2 id='overlay_pattern_1' src={isMargin ? mask : mask2} />
          <TeccoImage
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

export default Tecco;
