import React from "react";

const DatePicker = ({ value, setValue }) => {
  const changeDateHandler = (event) => {
    setValue(prev => ({ ...prev, dueDate: event.target.value }));
  };

  return (
    <>
      <input type="date" value={value} onChange={changeDateHandler} />
    </>
  );
};

export default DatePicker;
