import React from "react";

export default function Flag({ flagData }) {
  return (
    <>
      <div>
        <img
          src={flagData.flag}
          alt="Girl in a jacket"
          width="500"
          className="flag"
        />
      </div>
    </>
  );
}
