import React from "react";

const ServicesInfo = () => {
  const serviceInfo = [
    {
      title: "FREE AND FAST DELIVERY",
      details: "Free delivery for all orders over $140",
      icon: "https://i.ibb.co/thz9NyT/Car.png",
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      details: "Friendly 24/7 customer support",
      icon: "https://i.ibb.co/dkSHTJ9/Call.png",
    },
    {
      title: "MONEY BACK GUARANTEE",
      details: "We return money within 30 days",
      icon: "https://i.ibb.co/tZf939f/Money-Back.png",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 mt-36 mb-24">
      {serviceInfo.map((data, idx) => (
        <div className="grid items-center" key={idx}>
          <div className="flex justify-center">
            <img className="w-20 h-20" src={data?.icon} alt="" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold mb-2">{data?.title}</p>
            <p>{data?.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesInfo;
