import React from "react";
// import card1 from "../images/Hero.png";

export const Hero = () => {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4 img-fluid"
        src="../images/Hero.png"
        alt="..."
        width="600px"
      />
      <h1 class="display-5 fw-bold">DK design studio </h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          With DK’s professional approach to web design and development, you
          will obtain a perfect UI/UX achieved via responsive layouts. Your
          resulting web deliverables will be both good-looking and adaptable to
          any browser, dimension, device, etc
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Get a design
          </button>
        </div>
      </div>
    </div>
  );
};
