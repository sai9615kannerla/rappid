import React, { useEffect, useState } from "react";
import arr from "./data";
import findTime from "./Component/findTime";
import Tbody from "./Component/Tbody";
import Piechart from "./Component/Piechart";
let App = () => {
  let [details, setDetails] = useState([...arr]);
  let [todo, setTodo] = useState([]);
  let totalTime = [];

  let obj = {};

  useEffect(() => {
    for (let i = 0; i < details.length; i++) {
      if (obj[details[i].EmployeeName]) {
        obj[details[i].EmployeeName].push(details[i]);
      } else {
        obj[details[i].EmployeeName] = [details[i]];
      }
    }

    for (let key in obj) {
      let cdetails = obj[key];
      let ttime = 0;

      for (let i = 0; i < cdetails.length; i++) {
      ttime += findTime(cdetails[i]);}
      ttime /= 60;
      totalTime.push({ ttime, key });
      setTodo(totalTime)
    }
  }, []);

  return (
    <div>
      <table border='2'>
        <thead>
          <th>S.No</th>
          <th>Emp Name</th>
          <th>Time in hrs</th>                                                                                                                                                                           
        </thead>
        <tbody> {todo.map((item, index) => 
        <Tbody item={item} ind={index} key={index }/>)} </tbody>
      </table>

    <Piechart todo={todo} />
    </div>
  );
};

export default App;