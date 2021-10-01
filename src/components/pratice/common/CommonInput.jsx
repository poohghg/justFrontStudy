import React from "react";
const OnInput = React.memo(
  ({ name, value, onChange, placeholder = null, createType = null }) => {
    return (
      <div className="talkPostSection">
        <input
          className="talkTitleInput"
          name={name}
          value={value}
          onChange={onChange}
          type={createType}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default OnInput;
