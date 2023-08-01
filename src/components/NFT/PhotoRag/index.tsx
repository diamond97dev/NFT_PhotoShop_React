import layer from "assets/PhotoDrag/layer.png";
import paper from "assets/PhotoDrag/paper.png";
import texture from "assets/PhotoDrag/texture.png";
import layer2 from "assets/PhotoDrag-n/layer.png";
import paper2 from "assets/PhotoDrag-n/paper.png";
import texture2 from "assets/PhotoDrag-n/texture.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import { PhotoRagImage, PhotoRagPatten1, PhotoRagPatten2 } from "../../Styled/PhotoRag";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const PhotoRag: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <PhotoRagPatten1 id='overlay_pattern_1' src={isMargin ? texture : texture2} />
          <PhotoRagPatten2 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <PhotoRagImage
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

export default PhotoRag;
