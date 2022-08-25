import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
function PieChart() {
 const myData = [
   {
    values: [600000,800000,500000],
    labels: ['Honda', 'Jeep', 'Maruthi'],
    type: "pie",
    myconfig: "test",
    },
    
  ];
  const myLayout = {
    height: 400,
    width: 500,
  };
  const grConfig = { displayModeBar: false, edits: { legendPosition: true } };

  
  return (
    <>
    <div>
    <div spacing={5}>
    <input type="radio" name="manufacturer" value="Manufacturer" /> Manufacturer
    <input type="radio" name="fuel" value="Fuel" /> Fuel
    <input type="radio" name="currency" value="Currency" /> Currency
    <input type="radio" name="country" value="Country" /> Country

    </div>

      <Plot
        data={myData}
        layout={myLayout}
        config={grConfig}
     />
    </div>
    </>
  );
  }
 
export default PieChart;

