import { useSelector } from "react-redux";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log ("printing cart data") ;
  console.log( cart) ;
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

 
  return (
    <div className="container mx-auto py-8">
      {cart.length > 0 ? (
        <div className=" bg-white shadow-lg rounded-lg grid lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">
          <div className="p-4 flex flex-col">
            <div>
            <h1 className="text-2xl font-semibold">Your Cart</h1>
            <div className="flex items-center justify-between mt-4">
              <div className="text-gray-600">Summary</div>
              <p className="text-sm text-gray-600">Total Items: {cart.length}</p>
            </div>
            </div>
            <div className="mt-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold">Total Amount: ${totalAmount.toFixed(2)}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Your Cart Is Empty!</h1>
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;