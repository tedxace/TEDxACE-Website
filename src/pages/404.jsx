import React from "react";
import { Link } from "react-router-dom";

const ErrorPageNotFound = () => {
  return (
    <main id="main" className="main-page">
      <section id="speakers-details" className="wow fadeIn">
        <div className="container">
          <div className="section-header">
            <h2>Not found, error 404</h2>
          </div>
          <div className="row">
            <div className="details">
              <p>
                The page you are looking for no longer exists. Lost? Perhaps you
                can return back to the site's <Link to="/">homepage</Link> and
                see if you can find what you are looking for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPageNotFound;
