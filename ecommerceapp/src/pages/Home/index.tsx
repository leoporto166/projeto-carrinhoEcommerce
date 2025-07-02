
import produto1 from "../../../img/fone.png"
import { MdAddShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"

export function Home(){
    return(
        <div className="w-full  h-screen flex flex-col items-center" >
            <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>

            <main className="max-w-7xl mt-10 flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                
                <section className="font-semibold max-w-[250px]"> 
                        <Link to={"/"}>
                            <img 
                            src={produto1} 
                            className="w-[250px] h-[250px]"
                            alt="produto 1"
                            ></img>
                            <p>Fone ajdadjajdjdjajdada, adad, dadaadadd</p>
                        </Link>
                        <div className="flex items-center">
                            <strong >R$ 1000</strong>
                                <button className="ml-3 cursor-pointer text-white bg-black p-1">
                                    <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                </button>
                        </div>
                        
                </section>

                <section className="font-semibold max-w-[250px]"> 
                        <Link to={"/"}>
                            <img src={produto1} className="w-[250px] h-[250px]"></img>
                            <p>Fone ajdadjajdjdjajdada, adad, dadaadadd</p>
                        </Link>
                        <div className="flex items-center">
                            <strong >R$ 1000</strong>
                                <button className="ml-3 cursor-pointer text-white bg-black p-1">
                                    <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                </button>
                        </div>
                        
                </section>

                <section className="font-semibold max-w-[250px]"> 
                        <Link to={"/"}>
                            <img src={produto1} className="w-[250px] h-[250px]"></img>
                            <p>Fone ajdadjajdjdjajdada, adad, dadaadadd</p>
                        </Link>
                        <div className="flex items-center">
                            <strong >R$ 1000</strong>
                                <button className="ml-3 cursor-pointer text-white bg-black p-1">
                                    <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                </button>
                        </div>
                        
                </section>

               
                <section className="font-semibold max-w-[250px]"> 
                        <Link to={"/"}>
                            <img src={produto1} className="w-[250px] h-[250px]"></img>
                            <p>Fone ajdadjajdjdjajdada, adad, dadaadadd</p>
                        </Link>
                        <div className="flex items-center">
                            <strong >R$ 1000</strong>
                                <button className="ml-3 cursor-pointer text-white bg-black p-1">
                                    <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                </button>
                        </div>
                        
                </section>

                <section className="font-semibold max-w-[250px]"> 
                        <Link to={"/"}>
                            <img src={produto1} className="w-[250px] h-[250px]"></img>
                            <p>Fone ajdadjajdjdjajdada, adad, dadaadadd</p>
                        </Link>
                        <div className="flex items-center">
                            <strong >R$ 1000</strong>
                                <button className="ml-3 cursor-pointer text-white bg-black p-1">
                                    <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                </button>
                        </div>
                        
                </section>

                <section className="font-semibold max-w-[250px]"> 
                        <Link to={"/"}>
                            <img src={produto1} className="w-[250px] h-[250px]"></img>
                            <p>Fone ajdadjajdjdjajdada, adad, dadaadadd</p>
                        </Link>
                        <div className="flex items-center">
                            <strong >R$ 1000</strong>
                                <button className="ml-3 cursor-pointer text-white bg-black p-1">
                                    <MdAddShoppingCart  size={18}></MdAddShoppingCart>
                                </button>
                        </div>
                        
                </section>

                
            </main>

        </div>
    )
}