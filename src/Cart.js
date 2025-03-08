import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const deleteItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-2">
      <h2 className="font-bold text-center mb-8 underline">Cart Items</h2>
      <button
        className="font-bold justify-center  mx-auto bg-green-500 m-2 text-white rounded-lg p-2 "
        onClick={() => deleteItems()}
      >
        Clear Cart
      </button>

      <div>
        {cartItems.map((item) => (
          <ItemList data={cartItems} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
