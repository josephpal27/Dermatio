import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    // Add to Cart
    const addToCart = (product, selectedSize) => {

        setCart(prevCart => {
            const existing = prevCart.find(
                item =>
                    item.id === product.id &&
                    item.size === selectedSize.size
            );

            // If already exists
            if (existing) {

                // Prevent > 10
                if (existing.quantity >= 10) return prevCart;

                return prevCart.map(item =>
                    item.id === product.id && item.size === selectedSize.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // New product
            return [
                ...prevCart,
                {
                    ...product,
                    size: selectedSize.size,
                    price: selectedSize.price,
                    quantity: 1
                }
            ];
        });
    };

    // Remove
    const removeFromCart = (id, size) => {
        setCart(prevCart =>
            prevCart.filter(item => !(item.id === id && item.size === size))
        );
    };

    // Quantity update
    const updateQuantity = (id, size, type) => {

        setCart(prevCart =>
            prevCart.map(item => {

                if (item.id === id && item.size === size) {

                    // Increase (max 10)
                    if (type === "inc" && item.quantity < 10) {
                        return { ...item, quantity: item.quantity + 1 };
                    }

                    // Decrease (min 1)
                    if (type === "dec" && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                }

                return item;
            })
        );
    };

    // Total price
    const getTotal = () => {
        return cart.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
    };

    // Total items count
    const getTotalItems = () => {
        return cart.reduce(
            (acc, item) => acc + item.quantity,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                getTotal,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};