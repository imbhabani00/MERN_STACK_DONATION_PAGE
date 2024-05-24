import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          If you have time to spare, consider volunteering with us. Our volunteer opportunities range from event support to community outreach. Your time and effort can make a significant impact on our programs and initiatives.
          If you prefer to support us financially, your donation will directly fund our projects and activities. Every dollar you donate goes toward making a positive difference in our community. Your generosity is deeply appreciated.
          </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
