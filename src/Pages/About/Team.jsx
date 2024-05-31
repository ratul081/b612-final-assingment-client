import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Team = () => {
  const teamInfo = [
    {
      name: "Tom Cruise",
      photo: "https://i.ibb.co/Zd5Nx00/image-47.png",
      designation: "Founder & Chairman",
    },
    {
      name: "Emma Watson",
      photo: "https://i.ibb.co/mGThkn7/image-51.png",
      designation: "Managing Director",
    },
    {
      name: "Will Smith",
      photo: "https://i.ibb.co/GMbHpbB/image-46.png",
      designation: "Product Designer",
    },
  ];

  return (
    <div className="grid md:grid-cols-1 place-items-center lg:grid-cols-3 mt-32 mb-8">
      {teamInfo.map((data, idx) => (
        <div key={idx}>
          <img
            className="md:w-[326px] md:h-[392px] w-[300px] object-scale-down"
            src={data?.photo}
            alt=""
          />
          <div className="mt-8">
            <p className="text-3xl font-semibold">{data?.name}</p>
            <p>{data?.designation}</p>
            <div className="flex mt-4 gap-4">
              <FiTwitter className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
