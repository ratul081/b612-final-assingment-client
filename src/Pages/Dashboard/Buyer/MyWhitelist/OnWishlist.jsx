import React from "react";

const OnWishlist = () => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-xl font-semibold">
          Whitelist <span>(0)</span>
        </p>
        <p className="btn p-4">Move All To Beg</p>
      </div>
      <div className="flex justify-around">
        {[...Array(4).keys()].map((_, idx) => (
          <div key={idx} className="mt-14">
            <div className="flex justify-between">
              <p className="text-xs text-white bg-[#DB4444] rounded p-2">
                -35%
              </p>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143"
                    stroke="black"
                    strokeWidth="1.56"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <img
                src="https://i.ibb.co/SnqyhjV/beg.png"
                className="w-44 h-32"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-black w-full rounded-b text-white mt-4 p-2">
                <p>Add to Cart</p>
              </button>
            </div>
            <div className="my-4 space-y-2">
              <p>Gucci duffle beg</p>
              <p>
                $960 <del>$1160</del>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnWishlist;
