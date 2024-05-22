import React from "react";

function Square({ id, onClick }) {
  return (
    <div className="square" id={id} onClick={onClick}>{id}</div>
  )
}

export default Square