import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartItemPrice, getTotalCartItemQuantity } from "./CartSlice";

function CartOverview() {
  // const totalCartItemQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  // );
  const totalCartItemQuantity = useSelector(getTotalCartItemQuantity);
  const totalCartItemPrice = useSelector(getTotalCartItemPrice);

  if (!totalCartItemQuantity) return null;

  return (
    <div className="bg-stone-800 text-stone-200 px-4 py-4 sm:px-6 uppercase text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartItemQuantity} pizzas</span>
        <span>${totalCartItemPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
