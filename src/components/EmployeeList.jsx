import React from "react";
import EmployeeListItems from "./EmployeeListItems";
import data from "../models/data";

export default function EmployeeList() {
  return (
    <>
      <div className="employeesList">
        <EmployeeListItems
          src={data["employee1"]["image"]}
          Name={data["employee1"]["name"]}
          position={data["employee1"]["title"]}
        />

        <EmployeeListItems
          src={data["employee2"]["image"]}
          Name={data["employee2"]["name"]}
          position={data["employee2"]["title"]}
        />

        <EmployeeListItems
          src={data["employee3"]["image"]}
          Name={data["employee3"]["name"]}
          position={data["employee3"]["title"]}
        />

        <EmployeeListItems
          src={data["employee4"]["image"]}
          Name={data["employee4"]["name"]}
          position={data["employee4"]["title"]}
        />
        <EmployeeListItems
          src={data["employee5"]["image"]}
          Name={data["employee5"]["name"]}
          position={data["employee5"]["title"]}
        />

        <EmployeeListItems
          src={data["employee6"]["image"]}
          Name={data["employee6"]["name"]}
          position={data["employee6"]["title"]}
        />
      </div>
    </>
  );
}
