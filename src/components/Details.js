import React from 'react';

function Details({ data }) {
  return (
    <div className="column">
      <img src={data.avatar} alt={data.name} />
      <h3>{data.name}</h3>
      <ul>
        <li><strong>City:</strong> {data.details.city}</li>
        <li><strong>Company:</strong> {data.details.company}</li>
        <li><strong>Position:</strong> {data.details.position}</li>
      </ul>
    </div>
  )
}

export default Details