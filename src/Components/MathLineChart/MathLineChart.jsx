import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class MathLineChart extends Component {
  render() {
    const data = [
      { name: "Rahim", marks: 78 },
      { name: "Karim", marks: 85 },
      { name: "Sakib", marks: 92 },
      { name: "Nadia", marks: 66 },
      { name: "Ayesha", marks: 74 },
      { name: "Tanvir", marks: 88 },
      { name: "Rafi", marks: 95 },
      { name: "Jannat", marks: 81 },
      { name: "Fahim", marks: 69 },
      { name: "Mehedi", marks: 90 },
    ];

    return (
      <div className="flex justify-center mt-10">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="marks" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default MathLineChart;