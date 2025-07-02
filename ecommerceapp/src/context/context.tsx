
import { type ReactNode, createContext, useState } from "react";
import { type apiProps } from "../pages/Home";

interface UserProviderProps{
    children: ReactNode;
}

interface CartContextData{
    cart: CartProps[]; 
    cartAmount: number;
    addItemCart: (newItem: apiProps) => void;
}

interface CartProps{
    
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    total: number;
    amount: number;
   

}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({children}: UserProviderProps)
{
    const [cart, setCart] = useState<CartProps[]>([])


    function addItemCart(newItem: apiProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id)
        
            if(indexItem !== -1){
                const cartList = cart
                
                cartList[indexItem].amount = cartList[indexItem].amount + 1;

                cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price

                setCart(cartList)
                return
            }

            let data ={
                ...newItem,
                amount: 1,
                total: newItem.price
            }

            setCart(products => [...products, data])
            console.log(cart)
    }




    return(
        <CartContext.Provider value={{
            cart, 
            cartAmount: cart.length,
            addItemCart,
        }}>
            {children}
        </CartContext.Provider>
    )

}