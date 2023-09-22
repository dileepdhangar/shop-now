import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast';

const CartItem = ( {item , itemIndex}) => {
 
  const dispatch = useDispatch () ;

  const removeFromCart = ()=> {
            dispatch (remove(item.id)) ;
            toast.success ("Item Removed ") ;
  }
  return (

    <div> 

      <div className='flex flex-row justify-between'> 

        <div  className='h-180px'> 
          <img src= {item.image} className='h-full w-full '/>
        </div>
       <div className='flex flex-col  items-center justify-between'>
       <div className='w-40 text-gray-5600 font-normal text-[10px] text-left'> 
          <h1 className='text-gray-700 font-semibold text-lg text-left 
        truncate w-40 '> {item.title.split(" ").slice(0,10).join(" ")+ "..."}</h1>
          <h1> {item.description.split(" ").slice(0,10).join(" ")+ "..." }</h1>
       </div>
       <div className='text-green-600 font-semibold'> 
          <p> ₹{item.price * 82.97} </p>
       </div>
       <div onClick={removeFromCart}> 
         <FcDeleteDatabase  className='text-5xl'/>
       </div>
       </div>

      </div>
    </div>
  )
};

export default CartItem;
