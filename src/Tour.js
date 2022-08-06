import React, { useState } from "react";
import Fade from "react-reveal/Fade";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [more, setMore] = useState(false);
  return (
    <Fade left>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {more ? info : `${info.substring(0, 200)}...}`}
            <button onClick={() => setMore(!more)}>
              {more ? "Show less" : "read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    </Fade>
  );
};

export default Tour;
