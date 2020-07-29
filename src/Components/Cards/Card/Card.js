import React from "react";

export default function (props) {
  console.log(props)
  return (
    <div
      onClick={()=>props.removeUserHandler(props.id)}
      style={{
        display: "inline-block",
        backgroundColor: "#d07676",
        margin: "10px",
        padding: "30px",
        textAlign: "center",
        borderRadius: "10px",
        verticalAlign: "middle",
        cursor:"pointer"
      }}
    >
      <span>{props.name}</span>
      <h2 style={{ padding: "20px 0 0 0", margin: 0 }}>{props.age}</h2>
      <span
        style={{
          display: "block",
          fontWeight: "lighter",
          fontSize: "smaller",
          padding: "20px 0 0 0",
          margin: 0,
        }}
      >
        Click anywhere to delete!!!
      </span>
    </div>
  );
}
