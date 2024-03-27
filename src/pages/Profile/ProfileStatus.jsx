import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div>
      {!editMode &&  (
        <span onClick={activateEditMode}>{props.status || "....."}</span>
      )}
      {editMode && (
        <input
          onChange={handleChangeStatus}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
