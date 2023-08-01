import { useEffect, useState } from "react";

export const useImageSetting = (imageUrl: string, isMargin?: boolean) => {
  const [isImage, setIsImage] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [right, setRight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      if (((1188 * 875) / 1205) * aspectRatio > 660) {
        setHeight(isMargin ? 1188 : 1160);
        setWidth((((isMargin ? 1188 : 1160) * 875) / 1205) * aspectRatio);
        setTop(isMargin ? 673 : 796);
        setRight(isMargin ? 0 : 20);
      } else {
        setHeight(isMargin ? 1650 : 1655);
        setWidth((((isMargin ? 1650 : 1655) * 875) / 1205) * aspectRatio);
        setTop(isMargin ? 735 : 864);
        setRight(-225);
      }
      setIsImage(true);
    };

    if (!imageUrl) {
      setIsImage(false);
    }
  }, [imageUrl, isMargin]);

  return {
    isImage,
    top,
    right,
    width,
    height,
  };
};
