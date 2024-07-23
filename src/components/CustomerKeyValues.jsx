import React from "react";

function CustomerKeyValues({ keyValue, KeyTitle }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
      }}
    >
      <p style={{ paddingLeft: 70 }}>{KeyTitle}</p>
      <p style={{ paddingRight: 70, fontWeight: 600 }}>{keyValue}</p>
    </div>
  );
}

export default CustomerKeyValues;
