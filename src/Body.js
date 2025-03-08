import React, { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import ShimmerBody from './ShimmerBody';
import { Link } from 'react-router-dom';


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  

  // Fetch data from our API call
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestaurantList(
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setSearchData(
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList.length === 0 ? (
    <ShimmerBody/>
  ) : (
    <div>
      <div className="flex flex-row justify-center space-x-3 space-y-8 ">
        <div className="flex flex-row justify-between">
          <li className=" flex flex-row space-x-0 m-8 ">
            {/* search bar */}
            <input
              className="border-l-slate-400 rounded-lg border-4 "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              type="text"
              placeholder="Search here..... "
            />
            {/*  Search Button  */}
            <button
              className="w-10"
              onClick={() => {
                const filteredRestaurants = restaurantList.filter((res) =>
                  res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setSearchData(filteredRestaurants);
                console.log(searchData, searchText);
              }}
            >
              <img
                className="border"
                src="https://t3.ftcdn.net/jpg/04/99/34/78/360_F_499347841_IXq0bLOPN4MkKAa71nP3WMQq6LVlgeTO.jpg"
                alt="search-icon"
              />
            </button>
          </li>
        </div>
      </div>

      {/* restaurant cards data from map */}
      <div className="flex flex-wrap ">
        {searchData.map((res) => (
          <Link to={"/restaurants/"+res?.info?.id} key={res?.info?.id}>
          <RestaurantCard 

            cloudinaryImageId={res?.info?.cloudinaryImageId}
            resName={res?.info?.name}
            cuisines={res?.info?.cuisines.join(", ")}
            rating={res?.info?.avgRating}
            location={res?.info?.locality}
            duration={" • " + "20-25mins"}
          />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
