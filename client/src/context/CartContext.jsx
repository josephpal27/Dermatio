import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // ✅ Add to Cart
    const addToCart = (product, selectedSize) => {
        const existing = cart.find(
            item =>
                item.id === product.id &&
                item.size === selectedSize.size
        );

        if (existing) {
            setCart(cart.map(item =>
                item.id === product.id && item.size === selectedSize.size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    size: selectedSize.size,
                    price: selectedSize.price,
                    quantity: 1
                }
            ]);
        }
    };

    // ✅ Remove
    const removeFromCart = (id, size) => {
        setCart(cart.filter(item => !(item.id === id && item.size === size)));
    };

    // ✅ Quantity update
    const updateQuantity = (id, size, type) => {
        setCart(cart.map(item => {
            if (item.id === id && item.size === size) {
                if (type === "inc") return { ...item, quantity: item.quantity + 1 };
                if (type === "dec" && item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    // ✅ Total
    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};