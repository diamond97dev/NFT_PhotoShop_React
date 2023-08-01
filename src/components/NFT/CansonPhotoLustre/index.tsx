import layer from "assets/CansonPhotoLustre/layer.png";
import paper from "assets/CansonPhotoLustre/paper.png";
import texture from "assets/CansonPhotoLustre/texture.png";
import layer2 from "assets/CansonPhotoLustre-n/layer.png";
import paper2 from "assets/CansonPhotoLustre-n/texture.png";
import texture2 from "assets/CansonPhotoLustre-n/texture.png";
import mask1 from "assets/CansonPhotoLustre/mask1.png";
import mask2 from "assets/CansonPhotoLustre/mask2.png";
import mask3 from "assets/CansonPhotoLustre/mask3.png";
import { BackgroundBoard, Container, Paper } from "../../Styled/Main";
import { useImageSetting } from "../../../hooks";
import {
  CansonLustreImage,
  CansonLustrePatten1,
  CansonLustrePatten2,
  CansonLustrePatten3,
  CansonLustrePatten4,
  CansonLustrePatten5,
  CansonLustrePatten6,
} from "../../Styled/CansonPhotoLustre";

type Props = {
  imageUrl: string;
  isMargin: boolean;
};

const CansonLustre: React.FC<Props> = ({ imageUrl, isMargin }) => {
  const { isImage, top, right, width, height } = useImageSetting(imageUrl, isMargin);

  return (
    <Container id='template'>
      {isImage ? (
        <>
          <CansonLustrePatten1 id='overlay_pattern_1' src={isMargin ? texture : texture2} />
          <CansonLustrePatten2 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <CansonLustrePatten3 id='overlay_pattern_2' src={isMargin ? texture : texture2} />
          <CansonLustrePatten4 id='overlay_pattern_2' src={mask1} />
          <CansonLustrePatten5 id='overlay_pattern_2' src={mask2} />
          <CansonLustrePatten6 id='overlay_pattern_2' src={mask3} />
          <CansonLustreImage
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

export default CansonLustre;
