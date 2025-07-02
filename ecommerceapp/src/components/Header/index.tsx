import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { CartContext } from "../../context/context";


export function Header(){

    const {cart} = useContext(CartContext)

    const totalItems = cart ? cart.reduce((sum, item) => sum + item.amount, 0) : 0;

    return(
            <header className="mx-auto flex w-full bg-gray-300 h-12 justify-center items-center px-4">
                <div className=" w-full max-w-7xl flex justify-between items-center">
                    <Link to={"/"}>
                        <h1 className="text-xl font-semibold">Dev Shop</h1>
                    </Link>
                    <Link to={"/carrinho"} className="relative">
                    <FiShoppingCart size={25}></FiShoppingCart>
                        { totalItems > 0 && (<span className="absolute -top-3 -right-3 px-2.5 rounded-full w-6 h-6 flex items-center justify-center text-white bg-green-600">
                            {totalItems}
                        </span>)}
                    </Link>
                </div>
            
            </header>
    )
}