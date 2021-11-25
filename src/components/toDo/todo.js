import React, { useState } from "react";
import calculateHours from "../../shared/utils/calculateHours";
import transformDate from "../../shared/utils/transformDate";
import DatePicker from "../datePicker/datePicker";
import ExcitementSelector from "../excitementSelector/excitementSelector";
import EstimateEditor from "../estimateEditor/estimateEditor";
import classes from "./style.module.css";

const Todo = ({ data, updateTodos, deleteTodo }) => {
  const [todoState, setTodoState] = useState(data);
  const [isEditMode, setEditMode] = useState(false);

  const transformedDate = transformDate(data.dueDate);
  const calculatedHours = calculateHours(data.expectedTime);

  const onEditClickHandler = () => {
    setEditMode(!isEditMode);
  };

  const onCancelClickHandler = () => {
    setEditMode(!isEditMode);
    setTodoState(data);
  };

  const onDeleteClickHandler = () => {
    deleteTodo(todoState.id);
  };

  const onSaveClickHandler = () => {
    setEditMode(!isEditMode);
    updateTodos(todoState);
  };

  const completeTodoHandler = () => {
    setTodoState(prev => ({ ...prev, completed: !todoState.completed }));
    updateTodos(todoState);
  };

  return (
    isEditMode ?
      (<div className={classes.todoWrapper}>
        <div className={classes.nonEditable}>
          <h2>{todoState.name}</h2>
          {todoState.deps && <div>Dependencies: {todoState.deps}</div>}
        </div>
        <div className={classes.editable}>
          <span>Estimate time in minutes</span>
          <EstimateEditor value={todoState.expectedTime} setValue={setTodoState} />
        </div>
        <div className={classes.editable}>
          <span>Due date</span>
          <DatePicker value={todoState.dueDate} setValue={setTodoState} />
        </div>
        <div className={classes.editable}>
          <span>Excitement level</span>
          <ExcitementSelector value={todoState.excitement} setValue={setTodoState} />
        </div>
        <button onClick={onSaveClickHandler}>Save</button>
        <button onClick={onCancelClickHandler}>Cancel</button>
      </div>)
      :
      (<div className={classes.todoWrapper}>
        <div>
          <input type="checkbox" checked={todoState.completed} onChange={completeTodoHandler} />
          <h2>{todoState.name}</h2>
        </div>
        <div>
          {todoState.dueDate && <div>Due date: {transformedDate}</div>}
          <div>Expected time: {calculatedHours}</div>
          {todoState.deps && <div>Dependencies: {data.deps}</div>}
          {todoState.excitement && <div>Excitement: {data.excitement}</div>}
          <button onClick={onEditClickHandler}>Edit</button>
          <button onClick={onDeleteClickHandler}>Delete</button>
        </div>
      </div>)

  );
};

export default React.memo(Todo);
