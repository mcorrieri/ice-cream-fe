import React from "react";

function Form() {
  return (
    <div className="form">
      <h3>Add Ice Cream!</h3>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Description"></input>
        <input placeholder="Type"></input>
        <input placeholder="Cost"></input>
        <button type="submit">Add it!</button>
      </form>
    </div>
  );
}

export default Form;
