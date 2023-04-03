import React, { useState } from 'react';

function ImageHover(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="image-container">
      <img
        src={props.imageUrl}
        alt={props.imageAlt}
        className="image"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <figcaption className={hovered ? 'caption hover' : 'caption'}>
        {props.captionText}
      </figcaption>
    </div>
  );
}

export default ImageHover;