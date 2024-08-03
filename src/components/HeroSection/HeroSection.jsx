import React, { useEffect } from 'react';
import './Hero.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.utils.toArray(".parallax").forEach((layer) => {
      const depth = layer.dataset.depth;
      const movement = -(layer.offsetHeight * depth);
      tl.to(layer, { y: movement, ease: "none" }, 0);
    });
  }, []);

  return (
    <div>
     

      <div id="hero">
        <div className="layer-bg layer parallax" data-depth="0.10"></div>
        <div className="layer-1 layer parallax" data-depth="0.20"></div>
        <div className="layer-2 layer parallax" data-depth="0.50"></div>
        <div className="layer-3 layer parallax" data-depth="0.80"></div>
        <div className="layer-overlay layer parallax" data-depth="0.85"></div>
        <div className="layer-4 layer parallax" data-depth="1.00"></div>
      </div>

      <div id="content">
        <div className="container">
          <section className="first-section">
            <div className="row">
              <div className="col-sm-6">
                <h1>You cannot hide the soul. Through all his unearthly tattooings, I thought I saw the traces of a simple honest heart.</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <p>And besides all this, there was a certain lofty bearing about the Pagan, which even his uncouthness could not altogether maim. He looked like a man who had never cringed and never had had a creditor...</p>
              </div>
              <div className="col-sm-6">
                <p>At first they are overawing; their calm self-collectedness of simplicity seems a Socratic wisdom...</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
