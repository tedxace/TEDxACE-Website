import React, { useEffect } from "react";

import "../../sponsor.css";

const PastSpeakers = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div className="back flex flex-col justify-center mt-20 h-[600px] w-[100vw]">
      <header id="header">
        <h1 className="heading text-4xl ">PAST SPEAKERS</h1>
      </header>

      <div class="scroller" data-direction="left" data-speed="slow">
        <ul class="tag-list scroller_inner">
          <li>
            <img
              src="/speakers/gauri.svg"
              alt="Past Speaker"
              className="min-w-[120px] md:min-w-[150px] lg:min-w-[180px] aspect-square"
            />
          </li>
          <li>
            <img
              src="/speakers/psychologist.svg"
              alt="Past Speaker"
              className="min-w-[120px] md:min-w-[150px] lg:min-w-[180px] aspect-square"
            />
          </li>
          <li>
            <img
              src="/speakers/aayu.svg"
              alt="Past Speaker"
              className="min-w-[120px] md:min-w-[150px] lg:min-w-[180px] aspect-square"
            />
          </li>
          <li>
            <img
              src="/speakers/shibin.svg"
              alt="Past Speaker"
              className="min-w-[120px] md:min-w-[150px] lg:min-w-[180px] aspect-square"
            />
          </li>
          <li>
            <img
              src="/speakers/entrepreneur.svg"
              alt="Past Speaker"
              className="min-w-[120px] md:min-w-[150px] lg:min-w-[180px] aspect-square"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PastSpeakers;
