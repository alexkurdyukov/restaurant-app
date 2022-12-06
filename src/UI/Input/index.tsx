import  { useState } from "react";
import { inputProps } from "../../types/types";

const Input = ({ className, children, placeholder }: inputProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="input-container">
      <input
        placeholder={placeholder}
        className={`${className ? "className" : ""}`}
        value={"value"}
        type="text"
        onChange={(event) => event.target.value}
      />
      <div className=''></div>
    </div>
  );
};
