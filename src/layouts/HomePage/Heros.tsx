import React from "react";

export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What have you been reading ?</h1>
              <p className="lead">
                The library team would love to know what you have been reading.
                Weather it is to learn a new skill or grow with one, we will be
                able to provide top content for you !
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Our collection is always changing</h1>
              <p className="lead">
                Try to check in daily as our collection is always changing ! We
                work nonstop to provide the most accurate book colection and our
                book selection and our books are always going to be our top
                priority.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-laft">
              <div className="mt-2">
                <h1>What have you been reading ?</h1>
                <p className="lead">
                  The library team would love to know what you have been
                  reading. Weather it is to learn a new skill or grow with one,
                  we will be able to provide top content for you !
                </p>
                <a className="btn main-color btn-lg text-white" href="#">
                  Sign up
                </a>
              </div>
            </div>
            <div className="m-2">
              <div className="col-image-right"></div>
              <div className="mt-2">
                <h1>Our collection is always changing</h1>
                <p className="lead">
                  Try to check in daily as our collection is always changing !
                  We work nonstop to provide the most accurate book selection
                  and our Luv 2 Read students ! We are diligent about our book
                  seletcion and our books are always going to be our top
                  priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};