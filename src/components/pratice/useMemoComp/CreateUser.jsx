import React from "react";

const CreateUser = React.memo(({ name, value ,placeholder, onChange, creatType }) => {
    return (
      <div>
        {
          creatType === "input"
          ?
            <input
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
          :
          <>
            <input
              type = "radio"
              name={name}
              value={true}
              placeholder={placeholder}
              onChange={onChange}
              checked = {value === "true"}
            />
            <input
              type = "radio"
              name={name}
              value={false}
              placeholder={placeholder}
              onChange={onChange}
              checked = {value === "false"}
            />
          </>
        }

      </div>
    );
});

export default CreateUser;