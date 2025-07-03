import { type ReactNode, createContext, useState } from "react";
import { type apiProps } from "../pages/Home";

interface UserProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: apiProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

export interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  total: number;
  amount: number;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: UserProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");

  function addItemCart(newItem: apiProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      const cartList = [...cart]; // CORRIGIDO
      cartList[indexItem].amount += 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    const data: CartProps = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    const updated = [...cart, data];
    setCart(updated);
    totalCart(updated);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex(item => item.id === product.id);

    if (indexItem === -1) return;

    if (cart[indexItem].amount > 1) {
      const cartList = [...cart]; // CORRIGIDO
      cartList[indexItem].amount -= 1;
      cartList[indexItem].total -= cartList[indexItem].price;

      setCart(cartList);
      totalCart(cartList);
      return;
    }

    const updated = cart.filter(item => item.id !== product.id);
    setCart(updated);
    totalCart(updated);
  }

  function totalCart(items: CartProps[]) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].amount;
    }

    const totalFormatted = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    setTotal(totalFormatted);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}