import React from "react";
import EmployeeList from "./EmployeeListItem";
import data from "../models/data";

export default function EmployeeList() {
  return (
    <div>
      <div className="employee-list">
        <EmployeeListItem
          src={data["employee1"]["photo"]}
          Name={data["employee1"]["name"]}
          title={data["employee1"]["title"]}
        />

        <EmployeeListItem
          src={data["employee2"]["photo"]}
          Name={data["employee2"]["name"]}
          title={data["employee2"]["title"]}
        />

        <EmployeeListItem
          src={data["employee3"]["photo"]}
          Name={data["employee3"]["name"]}
          title={data["employee3"]["title"]}
        />

        <EmployeeListItem
          src={data["employee4"]["photo"]}
          Name={data["employee4"]["name"]}
          title={data["employee4"]["title"]}
        />
      </div>
    </div>
  );
}
