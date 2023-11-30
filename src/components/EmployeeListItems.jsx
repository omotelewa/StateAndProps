import React from "react";

export default function EmployeeListItems(props) {
  return (
    <div className="employees">
      <img src={props.src} alt="" />
      <h3>{props.Name}</h3>
      <p>{props.position}</p>
    </div>
  );
}
