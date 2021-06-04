import React from "react";

export default function LocationDetails({ locationData }) {
  const location = locationData.location;
  const ip = locationData.ip;

  return (
    <>
      <p className="card-text">
        Your IP is: {ip} <br /> and your currently located in {location.country}
        , {location.region}, {location.city}.
      </p>
      <a href="#" rel="noopener noreferrer" className="btn btn-primary">
        Go somewhere
      </a>
    </>
  );
}
