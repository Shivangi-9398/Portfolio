import React from 'react';
const Section = ({ section }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, margin: 10 }}>
      <h3>{section.type.toUpperCase()}</h3>
      <p>{section.content}</p>
    </div>
  );
};

export default Section;
