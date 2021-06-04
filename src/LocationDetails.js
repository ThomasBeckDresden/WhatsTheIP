import React from "react";

export default function LocationDetails({ locationData, flagData }) {
  const location = locationData.location;
  const ip = locationData.ip;
  console.log(locationData);
  return (
    <>
      <div className="card-text">
        <div className="row text-primary fs-3 ps-3">
          Your IP-adress is: {ip}
        </div>
        <div className="row  fs-6 p-3">
          Apparently you live in {flagData.name}
        </div>
        <div className="row  fs-6 ps-3">
          We were able to track your location to {location.region},{" "}
          {location.city}.
        </div>
      </div>
    </>
  );
}
