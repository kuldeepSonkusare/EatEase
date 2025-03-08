import React from "react";
import ItemList from "./ItemsList";

const RestaurantCategories = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={handleClick}
        className="text-center font-bold h-20 w-1/2  mx-auto bg-slate-200 flex justify-between m-2 p-2 rounded-lg shadow-lg cursor-pointer"
      >
        <h1>
          {data?.card?.card?.title} ({data?.card?.card.itemCards.length})
        </h1>
        <img
          className="h-5 bg-slate-200"
          src="https://www.iconbolt.com/preview/facebook/basicons/chevron-down-arrow.svg"
          alt="down-arrow"
        />
      </div>
      {/* Items List */}
      <div className="w-1/2 mx-auto">
        {showItems && <ItemList data={data?.card?.card?.itemCards} />}
        {console.log(Array.isArray(data?.card?.card?.itemCards))}
      </div>
    </div>
  );
};

export default RestaurantCategories;
