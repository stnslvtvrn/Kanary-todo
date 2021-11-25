import React from "react";

const EstimateEditor = ({ value, setValue }) => {
  const onChangeHandler = (event) => {
    setValue(prev => ({ ...prev, expectedTime: event.target.value }));
  };

  return (
    <input type="number" value={value} onChange={onChangeHandler} />
  );
};

export default EstimateEditor;
