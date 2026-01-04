import React from "react";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <input
        type="number"
        placeholder="Min rating"
        min="0"
        max="5"
        onChange={(e) => setRateFilter(Number(e.target.value))}
        style={{ padding: "5px" }}
      />
    </div>
  );
};

export default Filter;
