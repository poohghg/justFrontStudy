import React from "react";
const OnInput = React.memo(
  ({
    name,
    value,
    onChange,
    onKeyPress = null,
    placeholder = null,
    createType = null
  }) => {
    return (
      <div className="talkPostSection">
        <input
          className="talkTitleInput"
          name={name}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          type={createType}
          placeholder={placeholder}
        />
      </div>
    );
  }
);

export default OnInput;
