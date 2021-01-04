import React from "react";
import "./styles.css";

import useGenerateId from "./hooks/useGenerateId";

export default function App() {
  const generateId = useGenerateId();

  return (
    <form className="inputForm">
      <label htmlFor={generateId("name")}>Name</label>
      <input id={generateId("name")} type="text" />
      <label htmlFor={generateId("email")}>Email</label>
      <input id={generateId("email")} type="text" />
    </form>
  );
}
