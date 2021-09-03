import React from "react";

const CreateUser = React.memo(
  ({ name, value, placeholder, onChange, creatType }) => {
    return (
      <div className="creatUserBox">
        <label className="creatUserBoxItem1">{name}</label>
        {creatType === "input" ? (
          <input
            className="creatUserBoxItem2"
            type="input"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        ) : creatType === "checkbox" ? (
          <input
            className="creatUserBoxItem2"
            type="checkbox"
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            checked={value}
          />
        ) : null}
      </div>
    );
  }
);

export default CreateUser;
