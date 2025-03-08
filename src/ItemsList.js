import { useDispatch } from "react-redux";
import { additem } from "./CartSlice";

const ItemList = ({data} ) => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(additem(item));
  };

  return (
    data?.map((item) => (
      <div
        className="text-left flex flex-col justify-between p-2 border-b-4 bg-slate-100 rounded-lg mt-0"
        key={item?.card?.info?.id} 
      >
        <h2 className="font-bold">{item?.card?.info?.name}</h2>
        <p className="font-bold p-1">₹ {item?.card?.info?.price / 100}</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm w-1/2 my-auto font-serif text-wrap  h-auto">
            {item?.card?.info?.description}
          </p>
          <div className="relative">
            <img
              className="h-40 w-40 rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
              alt="Food Item"
            />
            <button
              onClick={() => handleAddClick(item)}
              className="absolute bottom-[-10px] text-lg font-bold left-4 bg-white text-green-500 mx-4 mt-4 w-28 py-2 border-black rounded-xl border-2"
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    ))
  );
};

export default ItemList;
