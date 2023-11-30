import React from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeHomePage from "./components/EmployeeHomePage";
import EmployeePage from "./components/EmployeePage";

function EmployeeHomePage(props) {
  return (
    <div className="App">
      <EmployeeHomePage />
      <EmployeePage />
      <Header />
    </div>
  );
}

export default EmployeeHomePage;
