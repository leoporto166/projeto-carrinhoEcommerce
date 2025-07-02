
import { useState } from "react"
import produto1 from "../../../img/fone.png"

export function Cart(){

    const [valor, setValor] = useState(1)
    const [subtotal, setSubtotal] = useState(1000)
    const [preco, setPreco] = useState(1000)

    function diminuir(){
        if(valor < 1){
            return
        }

        setValor(valor => valor - 1)
        setSubtotal(subtotal => subtotal - preco)
          
    }

    function aumentar(){

        setValor(valor => valor + 1)
        setSubtotal(subtotal => subtotal + preco)

    }

    return(
        <div>
            <main className="flex flex-col items-center">

                <h1 className="my-4 text-2xl font-semibold">Meus produtos</h1>
                
                <section className=" flex w-full max-w-7xl items-center justify-between p-2 border-b-2 border-gray-300">
                    <img 
                    src={produto1} 
                    alt="produto 1"
                    className="w-[150px]"></img>

                    <strong>Preço: R${preco}</strong>

                    <div>
                        <button className="bg-gray-500 w-[20px] rounded text-white"
                        onClick={diminuir}
                        >
                            -
                        </button>
                        <input className="w-[30px] text-center"
                        value={valor}
                        onChange={(e) => setValor(Number(e.target.value))}
                        />
                        <button className="bg-gray-500 w-[20px] rounded text-white"
                        onClick={aumentar}
                        >
                            +
                        </button>
                    </div>

                    <strong>
                        Subtotal: R${subtotal}
                    </strong>

                    </section>


                <section className=" mt-5 flex w-full max-w-7xl items-center justify-between p-2 border-b-2 border-gray-300">
                    <img 
                    src={produto1} 
                    alt="produto 2"
                    className="w-[150px]"></img>

                    <strong>Preço: R${preco}</strong>

                    <div>
                        <button className="bg-gray-500 w-[20px] rounded text-white"
                        onClick={diminuir}
                        >
                            -
                        </button>
                        <input className="w-[30px] text-center"
                        value={valor}
                        onChange={(e) => setValor(Number(e.target.value))}
                        />
                        <button className="bg-gray-500 w-[20px] rounded text-white"
                        onClick={aumentar}
                        >
                            +
                        </button>
                    </div>

                    <strong>
                        Subtotal: R${subtotal}
                    </strong>

                </section>

                <div className="flex w-full max-w-7xl px-1 my-1">
                    <strong>
                        Total: R$0
                    </strong>
                </div>

            </main>
        </div>
    )
}