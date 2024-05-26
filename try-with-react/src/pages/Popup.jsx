import { useState } from 'react';

export default function Popup({description, stock, closePopup}) {
  return (
    <div>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <button onClick={() => closePopup()} className="close-popup-btn">✕ Close</button>
    </div>
  );
}