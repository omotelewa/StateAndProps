import React from "react";
import Header from './Header;
import SearchBar from './searchBar';
import EmployeeListItem from "./EmployeeListItems";

export default function Header(props) {
  return (
    <header header className={props.className}>
      <h3>{props.title}</h3>
    </header>
  );
}
