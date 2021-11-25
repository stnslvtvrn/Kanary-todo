import React from "react";

const ExcitementSelector = ({ value, setValue }) => {
  const onChangeHandler = (event) => {
    setValue(prev => ({ ...prev, excitement: event.target.value }));
  };

  return (
    <select name="excitement" value={value} onChange={onChangeHandler} >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default ExcitementSelector;
