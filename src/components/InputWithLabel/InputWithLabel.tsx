import React from "react";

type Props = {
  label: string;
  value: string;
  placeholder: string;
  inputName: string;
  onChange: (value: string) => void;
};

const InputWithLabel = ({ label, value, inputName, onChange }: Props) => {
  const [isClicked, setIdClicked] = React.useState(false);
  const handleInput = () => {
    console.log("clicked()");
    setIdClicked(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputName}
        className={` cursor-text left-2 w-full  top-[3px] ${
          isClicked && "top-[-20px] cursor-default"
        }`}
        onClick={() => handleInput()}
      >
        {label}
      </label>
      <input
        value={value}
        className={`border-b-2 border-primary p-2 ${
          isClicked && " border-2"
        } outline-none w-full`}
        onClick={() => handleInput()}
        onChange={handleChange}
        id={inputName}
      />
    </div>
  );
};

export default InputWithLabel;
