import React, { useState } from "react";
import sortByDue from "../../shared/utils/sortByDue";
import DatePicker from "../datePicker/datePicker";
import ExcitementSelector from "../excitementSelector/excitementSelector";
import EstimateEditor from "../estimateEditor/estimateEditor";
import { v4 as uuidv4 } from 'uuid';
import classes from "./style.module.css";

const TodoConstructor = ({ setTodos }) => {
  const initialState = {
    name: "",
    expectedTime: 0,
    dueDate: "",
    excitement: "low",
    id: uuidv4(),
    deps: "",
    completed: false,
  };
  const [formState, setFormState] = useState({ ...initialState });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos(prevState => (sortByDue([...prevState, formState])));
    setFormState({ ...initialState });
  };

  const onNameChangeHandler = (event) => {
    setFormState(prevState => ({ ...prevState, name: event.target.value }));
  };

  const onDepsChangeHandler = (event) => {
    setFormState(prevState => ({ ...prevState, deps: event.target.value }));
  };

  return (
    <div className={classes.constructorWrapper}>
      <form className={classes.todoForm}>
        <label htmlFor={"name"} className={classes.formLabel}>
          <span className={classes.inputTitle}>Todo name</span>
          <input type="text" id={"name"} value={formState.name} onChange={onNameChangeHandler} />
        </label>
        <label htmlFor={"estimate"} className={classes.formLabel}>
          <span className={classes.inputTitle}>Estimate</span>
          <EstimateEditor setValue={setFormState} value={formState.expectedTime} />
        </label>
        <label htmlFor={"dueDate"} className={classes.formLabel}>
          <span className={classes.inputTitle}>Due date</span>
          <DatePicker setValue={setFormState} value={formState.dueDate} />
        </label>
        <label htmlFor={"excitement"} className={classes.formLabel}>
          <span className={classes.inputTitle}>Excitement level</span>
          <ExcitementSelector setValue={setFormState} value={formState.excitement} />
        </label>
        <label htmlFor={"deps"} className={classes.formLabel}>
          <span className={classes.inputTitle}>Dependencies</span>
          <input type="text" id={"deps"} value={formState.deps} onChange={onDepsChangeHandler} />
        </label>
        <input type={"submit"} onClick={onSubmitHandler} value="Add todo" disabled={!formState.name || !formState.name.trim()} />
      </form>
    </div>
  );
};

export default React.memo(TodoConstructor);