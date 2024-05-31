import React from "react";

const AboutBanner = () => {
  return (
    <section className="grid md:grid-cols-2 my-6">
      <div className="grid items-center">
        <div className="lg:mx-10">
          <p className="font-semibold text-5xl my-10">Our Story</p>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="my-6">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/Kh7fF4p/Side-Image.png" alt="" />
      </div>
    </section>
  );
};

export default AboutBanner;
