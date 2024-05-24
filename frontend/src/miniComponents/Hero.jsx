import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
        Our organization thrives on the support of dedicated volunteers who are passionate about making a difference. 
        By volunteering with us, you will have the opportunity to contribute your skills, time, and energy to a cause 
        that truly matters. Whether you can offer a few hours a week or more, your contribution will make a significant impact.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
