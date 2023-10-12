import Cost from "./components/Cost/Cost";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Name",
    amount: 999,
  },
  {
    id: "c2",
    date: new Date(2020, 9, 10),
    description: "Name 2",
    amount: 111,
  },
  {
    id: "c3",
    date: new Date(2021, 4, 11),
    description: "Name 3",
    amount: 899,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Cost costs={costs} />
    </div>
  );
}

export default App;
