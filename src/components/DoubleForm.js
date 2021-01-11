import React from "react";
import useGenerateId from "../hooks/useGenerateId";

const DoubleForm = () => {
  const generateId = useGenerateId();
  return (
    <form className="inputForm">
      <label htmlFor={generateId("name")}>Name</label>
      <input id={generateId("name")} type="text" />
      <label htmlFor={generateId("email")}>Email</label>
      <input id={generateId("email")} type="text" />
    </form>
  );
};

export default DoubleForm;
