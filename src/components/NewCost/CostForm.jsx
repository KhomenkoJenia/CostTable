import "./costForm.scss";
import React, { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    //setUserInput({   2 variant
    //  ...userInput,
    //  name: event.target.value,//
    //});

    // setUserInput((previousState) => {     3 variant ideal
    //   return {
    //    ...previousState,
    //      name: event.target.value,
    //    };
    //  });
  };
  const priceChangeHandler = (event) => {
    setInputAmount(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    amount: event.target.value,
    //  });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    //  setUserInput({
    //    ...userInput,
    //    date: event.target.value,
    //  });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-cost__control">
        <div className="new-cost__control">
          <label htmlFor="surname">Назва</label>
          <input
            id="surname"
            value={inputName}
            onChange={nameChangeHandler}
            type="text"
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="sum">Сума</label>
          <input
            id="sum"
            value={inputAmount}
            onChange={priceChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label htmlFor="datemain">Дата</label>
          <input
            id="datemain"
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Додати витрату</button>
          <button type="button" onClick={props.onCancel}>
            Скасувати
          </button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
