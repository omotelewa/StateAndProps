import React from "react";

export default function Header(props) {
  return (
    <header header className={props.className}>
      <h3>{props.title}</h3>
    </header>
  );
}
