import React from "react";
import Tour from "./Tour";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <Fade right>
          <h2>Our Tours</h2>
        </Fade>
        <Zoom>
          <div className="underline"></div>
        </Zoom>
      </div>

      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
