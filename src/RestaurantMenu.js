import ShimmerBody from "./ShimmerBody";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "./useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { res_id } = useParams();
  const [showIndex, setshowIndex] = useState(null);
  const resMenu = UseRestaurantMenu(res_id);
  if (resMenu.length === 0) return <ShimmerBody />;
  const restData = resMenu[2]?.card?.card?.info;
  const restuarantCategories =
    resMenu[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
      (res) =>
        res?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="">
      <div className="items-center  font-sans text-center font-bold rounded-lg bg-blue-100 w-1/2 mx-auto m-4 p-2 shadow-xl shadow-green-200">
        <h2 className="text-lg">{restData.name}</h2>
        <h4>{restData.cuisines.join(", ")}</h4>
        <h4>{restData?.locality}</h4>

        <div className="m-2 p-2items-center mx-auto text-center">
          <h2>{restData?.sla?.slaString}</h2>
          <h2 className="m-2 p-2 space-y-2 font-bold">
            Cost For Two:-
            {restData?.costForTwoMessage}
          </h2>
        </div>
      </div>
      <div>
        {restuarantCategories.map((res, index) => {
          // javascript maintains a local state  with all variables and functions in its lexical scope so once 
          //returned it will have the access to all states and variables in the lexical scope
          return (  
            <RestaurantCategories
              key={index}
              setshowIndex={() => showIndex === index ? setshowIndex(null) : setshowIndex(index)}
              showItems={index === showIndex ? true : false}
              data={res}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
