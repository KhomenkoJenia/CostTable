import React, { useState } from "react";
import "./newCost.scss";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const inputCostDataHandler = () => {
    setFormVisible(true);
  };
  const cancelCostHandler = () => {
    setFormVisible(false);
  };

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    setFormVisible(false);
    props.onAddCost(costData);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Додати Нову Витрату</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
