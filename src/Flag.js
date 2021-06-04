import React from "react";

export default function Flag({ flagData }) {
  console.log(flagData);
  console.log(flagData.flag);
  return (
    <>
      <div>
        <img src={flagData.flag} alt="Girl in a jacket" width="500" />
      </div>
    </>
  );
}
