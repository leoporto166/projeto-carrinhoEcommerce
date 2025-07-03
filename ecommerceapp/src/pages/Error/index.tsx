
import { Link } from "react-router-dom"

export function Error(){
    return(
        <div className="w-full max-w-7xl h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl">404</h1>
            <p className="text-xl">Não foi possivel encotrar essa página</p>
            <Link to={"/"} className="bg-gray-300 p-1 rounded font-semibold cursor-pointer mt-2">
                Voltar a Home
            </Link>
        </div>

    )
}