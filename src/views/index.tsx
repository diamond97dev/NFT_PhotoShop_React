import React, { useState } from "react";
import * as htmlToImage from "html-to-image";
import Select, { SingleValue } from "react-select";

import {
  Blank,
  Button,
  Content,
  ContentWrapper,
  HelpText,
  Input,
  InputWrapper,
  NFTWrapper,
  OriginImage,
  OriginWrapper,
  Wrapper,
} from "./../components/Styled/Main";
import NFT from "../components/NFT/Main";
import { marginOption, options } from "../utils/constants";
import { customStyles, optionStyles } from "../utils/helper";

const MainPage: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<{ value: string; label: string }>
  >(options[0]);

  const [selectedMarginOption, setSelectedMarginOption] = useState<
    SingleValue<{ value: string; label: string }>
  >(marginOption[0]);

  const handleDownload = (id: string) => {
    const element = document.getElementById(id) as HTMLElement;
    htmlToImage
      .toPng(element)
      .then(function (dataUrl) {
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = "download.png";
        a.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <Wrapper>
      <>
        <InputWrapper>
          <HelpText>Image URL:</HelpText>
          <Input
            placeholder='Enter the image URL'
            onChange={(event: any) => setImageUrl(event.target.value)}
            value={imageUrl}
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={customStyles}
          />
          <Select
            defaultValue={selectedMarginOption}
            onChange={setSelectedMarginOption}
            options={marginOption}
            styles={optionStyles}
          />
          <Button
            onClick={() => {
              handleDownload("template");
            }}
            disabled={!imageUrl}
          >
            Download
          </Button>
        </InputWrapper>
        <ContentWrapper>
          <Content>
            <OriginWrapper>
              {imageUrl ? (
                <OriginImage id='origin' src={imageUrl} alt='Invalid Image' />
              ) : (
                <Blank />
              )}
            </OriginWrapper>
            <NFTWrapper>
              <NFT
                imageUrl={imageUrl}
                paperType={selectedOption?.value ?? "noArt"}
                isMargin={selectedMarginOption?.value === "margin" ? true : false}
              />
            </NFTWrapper>
          </Content>
        </ContentWrapper>
      </>
    </Wrapper>
  );
};

export default MainPage;
