import React,{ useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import Buysection from './Components/Buysection';
import Cart from './Components/Cart';

function App() {

    const [cartItem, setCartItem] = useState([])

    const addInCart = (element) => {
      
      const isItemAlreadyAdded = cartItem.findIndex(function(array){
        return array.id === element.id
      })

      if(isItemAlreadyAdded !== -1){
        console.log(cartItem)
        toast("Item already in Cart",{
          type : "error"
        })
      }
      else{
        setCartItem([...cartItem,element])
        toast("Item added in cart",{
          type : "success"
        })
        }
    }

    const buyNow = () => {
      setCartItem([])
      toast("Thankyou for shopping with us",{
        type : "info"
      })
    }

    const removeItem = (element) => {
      setCartItem(cartItem.filter(item => item.id !== element.id))
      toast("Removed item from cart",{
        type : "error"
      })
    }

  return (
    <div className="App">
      <ToastContainer>
      </ToastContainer>
      <div className="row">
        <div className="col-8">
          <Buysection addInCart={addInCart}/>
        </div>
        <div className="col-4">
          <Cart
            cartItem={cartItem}
            buyNow={buyNow}
            removeItem={removeItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
