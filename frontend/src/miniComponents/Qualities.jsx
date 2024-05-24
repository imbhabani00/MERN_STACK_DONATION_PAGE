import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:
        " Community development is at the heart of our mission. We believe that strong, vibrant communities are the foundation of a thriving society. Our efforts in community development focus on empowering individuals, fostering collaboration, and creating opportunities for growth and improvement.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:
        "At [Our Organization], we are committed to maintaining the highest standards of transparency and accountability. We believe that our supporters have the right to know how their contributions are being used and the impact they are making.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:
        " At [Our Organization], measuring the impact of our work is crucial to understanding the effectiveness of our programs and initiatives. We are committed to using data-driven approaches to evaluate our outcomes and continuously improve our efforts.",
    },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
