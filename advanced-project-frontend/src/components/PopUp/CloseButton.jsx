import React from 'react';

function CloseButtonRecc(props) {
  return (
    <button className="close-btn" onClick={props.onClick}>
      &times;
    </button>
  );
}

export default CloseButtonRecc;
