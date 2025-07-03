
import { Link } from "react-router-dom"
import { CartContext } from "../../context/context"
import { useContext } from "react"

export function Cart(){

    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)



    return(
        <div>
            <main className="flex flex-col items-center">

                <h1 className="my-4 text-2xl font-semibold">Meus produtos</h1>

                {Array.isArray(cart) && cart.length === 0 && (
                    <div className="flex flex-col items-center">
                        <p className="text-2xl mt-5 mb-2">Seu carrinho esta vazio</p>

                        <Link to={"/"} className="text-xl  bg-gray-400 text-white p-2 rounded">
                        Acessar produtos
                        </Link>
                    </div>
                )}
                
                {Array.isArray(cart) && cart.map((item) => (
                    

                    <section className=" flex w-full max-w-7xl items-center justify-between p-2 border-b-2 border-gray-300" key={item.id}>
                        

                    <img 
                    src={item.cover} 
                    alt="produto 1"
                    className="w-[150px]"></img>

                    <strong>Preço: {item.price.toLocaleString("pt-Br", {
                        style: "currency",
                        currency: "BRL"
                    })}</strong>

                    <div>
                        <button className="bg-gray-500 w-[20px] rounded text-white"
                        onClick={() => removeItemCart(item)}
                        >
                            -
                        </button>

                        <span className="p-2">{item.amount}</span>

                        <button className="bg-gray-500 w-[20px] rounded text-white"
                        onClick={() => addItemCart(item)}
                        
                        >
                            +
                        </button>
                    </div>

                    <strong>
                        Subtotal: R${item.total}
                    </strong>

                        

                    </section>
                ))}

                {Array.isArray(cart) && cart.length !== 0 && (
                    <div className="flex w-full max-w-7xl px-1 my-1">
                    <strong>
                        Total: {total}
                    </strong>
                </div>
                )}

                

            </main>
        </div>
    )
}