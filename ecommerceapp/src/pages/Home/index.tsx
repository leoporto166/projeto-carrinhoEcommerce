
import { useContext, useEffect, useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { api } from "../../services/api"
import { CartContext } from "../../context/context"
import toast from "react-hot-toast"


export interface apiProps{
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}




export function Home(){
    const {addItemCart} = useContext(CartContext)

    function handleAddCart(product: apiProps){
        toast.success("Produto adicionado no carrinho.")
        addItemCart(product);
    }


    const [products, setProducts] = useState<apiProps[]>([])

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/products")

            console.log(response.data)

            setProducts(response.data)

            
        }

        loadProducts();
    }, [])
    return(
            <div className="w-full  h-screen flex flex-col items-center" >
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>
                <main className="max-w-7xl mt-10 flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {products.map((produto) => (
                        <section className="font-semibold max-w-[250px] mb-5" key={produto.id}>
                            <Link to={"/carrinho"}>
                                <img
                                src={produto.cover}
                                className="w-[250px] h-[250px]"
                                alt={produto.title}
                                ></img>
                                <h1>{produto.title}</h1>
                            </Link>
                            <div className="flex items-center">
                                <strong >{produto.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}</strong>

                                    <button className="ml-3 cursor-pointer text-white bg-black p-1"
                                    onClick={() => {
                                        handleAddCart(produto)

                                    }}
                                    >
                                        <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                    </button>

                            </div>
            
                    </section>
                    ))}
            
            
            
                </main>
            </div>
    )
}