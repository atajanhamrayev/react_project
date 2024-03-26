import React, { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };

  return (
    <div>
      {!editMode && (
        <span onDoubleClick={activateEditMode}>{props.status}</span>
      )}
      {editMode && (
        <input
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={props.status}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
