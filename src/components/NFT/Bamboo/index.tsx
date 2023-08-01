import layer from "assets/Bamboo/layer.png";
import paper from "assets/Bamboo/paper.png";
import layer2 from "assets/Bamboo-n/layer.png";
import paper2 from "assets/Bamboo-n/paper.png";
import texture from "assets/Bamboo/texture.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { BambooImage, BambooPatten1, BambooPatten2, BambooPatten3 } from "../../Styled/Bamboo";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const Bamboo: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <BambooPatten1 id='overlay_pattern_1' src={isMargin ? texture : paper2} />
          <BambooPatten2 id='overlay_pattern_2' src={isMargin ? texture : paper2} />
          <BambooPatten3 id='overlay_pattern_2' src={isMargin ? texture : paper2} />
          <BambooImage
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

export default Bamboo;
