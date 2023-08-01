import React from "react";

import Bamboo from "../Bamboo";
import CansonBaryta from "../CansonBaryta";
import CansonLustre from "../CansonPhotoLustre";
import GermanEtching from "../GermanEtching";
import Museum from "../CansonMuseumCanvas";
import NoArt from "../NoArt";
import PhotoRag from "../PhotoRag";
import Tecco from "../Tecco";

type Props = {
  imageUrl: string;
  paperType: string;
  isMargin: boolean;
};

const NFT: React.FC<Props> = ({ imageUrl, paperType = "noArt", isMargin = true }) => {
  const NFTList = [
    {
      value: "noArt",
      render: () => <NoArt imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "bamboo",
      render: () => <Bamboo imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "cansonBaryta",
      render: () => <CansonBaryta imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "cansonMuseumCanvas",
      render: () => <Museum imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "cansonPhotoLustre",
      render: () => <CansonLustre imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "germanEtching",
      render: () => <GermanEtching imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "photoRag",
      render: () => <PhotoRag imageUrl={imageUrl} isMargin={isMargin} />,
    },
    {
      value: "tecco",
      render: () => <Tecco imageUrl={imageUrl} isMargin={isMargin} />,
    },
  ];
  return NFTList.find((item) => item.value === paperType)?.render() ?? <div>Undefined.</div>;
};

export default NFT;
