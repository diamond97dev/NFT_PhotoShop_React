import { CSSObjectWithLabel } from "react-select";

export const customStyles = {
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    zIndex: 9999,
  }),
  option: (provided: CSSObjectWithLabel, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    color: isSelected ? "white" : "black",
    backgroundColor: isSelected ? "#12bcf0" : "white",
    "&:hover": {
      backgroundColor: isSelected ? "#12bcf0" : "#84e0fa",
    },
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minWidth: "250px",
    borderColor: "#2ba0ff",
    borderWidth: "2px",
    "&:focus-visible": {
      borderColor: "#2ba0ff",
      outline: "none",
    },
  }),
};

export const optionStyles = {
  menu: (provided: CSSObjectWithLabel) => ({
    ...provided,
    zIndex: 9999,
  }),
  option: (provided: CSSObjectWithLabel, { isSelected }: { isSelected: boolean }) => ({
    ...provided,
    color: isSelected ? "white" : "black",
    backgroundColor: isSelected ? "#12bcf0" : "white",
    "&:hover": {
      backgroundColor: isSelected ? "#12bcf0" : "#84e0fa",
    },
  }),
  control: (provided: CSSObjectWithLabel) => ({
    ...provided,
    minWidth: "150px",
    borderColor: "#2ba0ff",
    borderWidth: "2px",
    "&:focus-visible": {
      borderColor: "#2ba0ff",
      outline: "none",
    },
  }),
};
