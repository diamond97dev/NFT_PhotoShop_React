import layer from "assets/NoArt/layer.png";
import paper from "assets/NoArt/paper.png";
import layer2 from "assets/NoArt-n/layer.png";
import paper2 from "assets/NoArt-n/paper.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { NoArtImage } from "../../Styled/NoArt";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const NoArt: React.FC<Props> = ({ imageUrl, isMargin = true }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <NoArtImage
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

export default NoArt;
