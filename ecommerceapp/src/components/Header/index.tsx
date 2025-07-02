import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";


export function Header(){
    return(
        <header className="mx-auto flex w-full bg-gray-300 h-12 justify-center items-center px-4">
            <div className=" w-full max-w-7xl flex justify-between items-center">
                <Link to={"/"}>
                    <h1 className="text-xl font-semibold">Dev Shop</h1>
                </Link>
                <Link to={"/carrinho"} className="relative">
                <FiShoppingCart size={25}></FiShoppingCart>
                    <span className="absolute -top-3 -right-3 px-2.5 rounded-full w-6 h-6 flex items-center justify-center text-white bg-green-600">
                        2
                    </span>
                </Link>
            </div>

            
        </header>
    )
}