import React from "react";

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li className="info-id">
          <p>ID:</p>
          <strong>{info.id}</strong>
        </li>
        <li className="info-title">
          <p>Title:</p>
          <strong>{info.title}</strong>
        </li>
        <li className="info-last_updated">
          <p>Last Updated:</p>
          <strong>{info.last_updated}</strong>
        </li>
        <li className="info-sources">
          <a
            className="info-source-link"
            href={info.sources}
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
