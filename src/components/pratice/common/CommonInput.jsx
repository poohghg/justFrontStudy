import React, { useEffect, useState, useCallback, useReducer } from "react";
const OnInput = React.memo(
  ({ createType, name, value, placeholder, onChange }) => {
    return (
      <div className="talkPostSection">
        <input
          className="talkTitleInput"
          type={createType}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default OnInput;
