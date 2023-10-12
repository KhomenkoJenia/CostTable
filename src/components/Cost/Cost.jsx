import "./cost.scss";
import Card from "../UI/Card";
import CostsFilter from "../CostsFilter/CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";

import CostsDiagram from "./CostsDiagram";

function Cost(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Cost;
