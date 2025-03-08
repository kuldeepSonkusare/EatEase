import { useState,useEffect } from 'react';
import RestaurantMenu from './RestaurantMenu';

const UseRestaurantMenu = (res_id) => {
  const [restaurantMenu, setrestaurantMenu] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${res_id}`
      );

      const json = await response.json();
      setrestaurantMenu(json?.data?.cards);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return restaurantMenu;
};

export default UseRestaurantMenu;
