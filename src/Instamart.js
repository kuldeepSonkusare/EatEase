import React from "react";
import { useState, useEffect } from "react";

const Instamart = () => {
  const [listItems, setListItems] = useState([]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP%20Request%20Method:%20GET"
    );
    const json = await data.json();

    setListItems(json?.data.widgets[1].data);
    console.log(listItems);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg w-2/3 mx-auto">
        <div className="h-20 flex justify-between m-6 p-4">
          <div className="h-12 flex  space-x-2">
            <img
              className="h-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/512/66/66822.png"
              alt="arrow_image"
            />
            <div className=" h-14 w-14 bg-orange-500 rounded-md text-center  py-1">
              <h1 className="text-white text-xl font-bold">11</h1>
              <h2 className="text-white font-bold ">MINS</h2>
            </div>

            <h2 className="font-bold whitespace-nowrap">Delivery to Other</h2>
          </div>

          <img
            src="https://iconape.com/wp-content/png_logo_vector/user-circle.png"
            alt="user_logo"
          />
        </div>
        <div className="p-2">
          <form class="max-w-2xl mx-auto">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Items...."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-slate-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap  w-2/3 mx-auto  space-x-16 space-y-10 m-10">
        {listItems.map((res) => (
            <div className="items-center justify-center">
                <img
            className=" h-24 w-24 scale-110 inset-10"
            src={
              "https://thingproxy.freeboard.io/fetch/https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/" +
              res.imageId
            }
            alt="items-image"
            key={res.id} // Adding a unique key for each image
          />
          <p className="text-xs text-[#428C38] mt-2 text-center">{res.displayName}</p>

            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Instamart;
