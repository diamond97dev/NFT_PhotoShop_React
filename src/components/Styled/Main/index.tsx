import { styled } from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  background: #bbd5da;
  padding-right: 24px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: solid 2px;
  padding: 8px;
  min-width: 700px;
  outline: none;
  appearance: none;
  border-radius: 4px;
  border-color: #2ba0ff;
  &:focus-visible {
    border-color: #3387f5;
  }
`;

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  width: 1000px;
  height: 716px;
  left: 0;
  top: 555;
  padding: 0px;
`;

const Paper = styled.img`
  position: absolute;
  z-index: 8;
  opacity: 100%;
`;

const BackgroundBoard = styled.img`
  position: absolute;
  z-index: 8;
  opacity: 100%;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  user-select: none;
  z-index: 13;
`;

const Button = styled.button`
  padding: 8px;
  padding-right: 10px;
  padding-left: 10px;
  border: 1px solid #12bcf0;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
  background-color: #74caec;
  color: ${(props) => (props.disabled ? "#ffffff" : "#ffffff")};
  &:hover {
    background-color: ${(props) => !props.disabled && "#669ef1"};
    color: ${(props) => !props.disabled && "#ffffff"};
    border-color: ${(props) => !props.disabled && "#7bc1fa"};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HelpText = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #0baae9fd;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;

const OriginWrapper = styled.div``;

const OriginImage = styled.img`
  height: 350px;
  width: 350px;
  object-fit: contain;
  border: 1px solid #12bcf0;
`;

const Blank = styled.div`
  height: 350px;
  width: 350px;
  background-color: #97d5e7;
  border: 1px solid #12bcf0;
`;

const NFTWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 716px;
  overflow: hidden;
  border: 1px solid #12bcf0;
`;

export {
  Wrapper,
  Input,
  Container,
  Paper,
  BackgroundBoard,
  Button,
  InputWrapper,
  HelpText,
  ContentWrapper,
  Content,
  OriginWrapper,
  OriginImage,
  Blank,
  NFTWrapper,
};
