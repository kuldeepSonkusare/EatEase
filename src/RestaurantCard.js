export const RestaurantCard = (props) => {
  const { resName, cuisines, location, rating, duration, cloudinaryImageId } =
    props;
  return (
    <div className="items-center justify-center mx-auto">
      <div className="flex  shadow-lg flex-col h-auto w-48 flex-wrap mx-4 rounded-lg hover:bg-slate-200 items-left text-left m-2 p-4 hover:scale-105 duration-150 hover:shadow-lg">
        <img
          className="h-36 w-48 rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt=""
        />
        <h3 className="font-bold m-2 text-sm">{resName}</h3>
        <span className="flex font-bold mr-2 text-green-600">
          <svg
            className="m-1"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16.23 18L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23zM12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
            />
          </svg>
          {" " + rating}
          {duration}
        </span>
        <p className="font-san text-red-500 font-medium text-left p-2 line-clamp-1">
          {cuisines}
        </p>

        <p className="font-san  font-bold">{location}</p>
      </div>  
    </div>
  );
};
