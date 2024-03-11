import React from "react";
import { Link } from "react-router-dom";

const ErrorPageNotFound = () => {
  return (
    <main
      id="main"
      className="main-page p-4 h-[50vh] flex items-center w-full justify-center"
    >
      <section id="speakers-details" className="wow fadeIn">
        <div className="container">
          <div className="section-header">
            <h2 className="text-3xl font-bold">Not found, error 404</h2>
          </div>
          <div className="row">
            <div className="details">
              <p className="text-xl w-[40vw] py-4">
                The page you are looking for no longer exists. Lost? Perhaps you
                can return back to the site's{" "}
                <Link to="/" className="text-blue-400">
                  homepage
                </Link>{" "}
                and see if you can find what you are looking for.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPageNotFound;
