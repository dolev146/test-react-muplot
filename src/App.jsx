import React, { useState } from "react";
import uPlot from "uplot";
import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";


const target = document.querySelector("#root");

const data = [
  [0, 1, 2, 3, 4, 5],
  [0, 1, 2, 3, 4, 5],
];

const options = {
  width: 1020,
  height: 300,
  scales: {
    x: {
      time: false,
      range: [-0.5, 5.5],
    },
    y: {
      //	auto: false,
    },
  },
  axes: [
    {
      // space: 300,
    },
  ],
  series: [
    {},
    {
      stroke: "blue",
    },
  ],
};



const Chart = () => (
  <UplotReact
    options={options}
    data={data}
    target={target}
    onCreate={(chart) => {}}
    onDelete={(chart) => {}}
  />
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Chart />
    </div>
  );
}

export default App;
