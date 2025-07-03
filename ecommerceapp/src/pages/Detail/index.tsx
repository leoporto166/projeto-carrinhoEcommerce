
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { type apiProps } from "../Home"
import { CartContext } from "../../context/context"
import { useContext } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function Detalhes(){

    const {addItemCart} = useContext(CartContext)

    const {id} = useParams();
    const [produtc, setProdutc] = useState<apiProps>()

    const navigate = useNavigate()

    useEffect(() => {

        

       async function loadProduct(){
        try{
        const response = await api.get(`/products/${id}`)
        setProdutc(response.data)
        console.log(setProdutc)
        }
        catch{
           navigate("*") 
        }
    }

    loadProduct();

    }, [id])

    function handleCart(product: apiProps){
        toast.success("Produto adicionado no carrinho.")
        addItemCart(product)
        navigate("/carrinho")

    }
    
    return(
        <div className=" flex w-full justify-center">
            <main className="flex-col w-full max-w-7xl flex sm:flex-row items-center px-2 mt-5 gap-2">
                <img src={produtc?.cover} className="w-[300px]"></img>

                <div className="flex flex-col px-2 gap-2">
                    <h1 className="text-xl font-bold">{produtc?.title}</h1>

                    <p>{produtc?.description}</p>

                    <div className="flex">

                        <strong>{produtc?.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}</strong>
                        <button  onClick={() => {
                                    if (!produtc) return;
                                    handleCart(produtc);
                                }}>

                            

                            <MdAddShoppingCart className={"ml-2 cursor-pointer text-white bg-black p-1"} size={22}></MdAddShoppingCart>
                        </button>

                    </div>
                </div>
            </main>
        </div>
    )

}