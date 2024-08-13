import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";
import CartProducts from "./components/CartProducts";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const onClickSendButton = (() => {
    setShowContact(false)
  })

  const onClickHelpIcon = (() => {
    setShowContact(true)
  })

  const onClickCloseContactIcon = (() => {
    setShowContact(false)
  })

  const onClickLogoCart = (() => {
      setShowCart(true)
  })

  const onClickCloseIconCart = (() => {
    setShowCart(false)
  })

  const totalProducts = () => cart.reduce((total, item) => total + (item.quantity), 0)

  const addToCart = (item) => {

  const itemExist = cart.findIndex(product => product.id === item.id)
    console.log(itemExist, "ya")

    if(itemExist >= 0){
      if(cart[itemExist].quantity >= maxQty) return
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart)
      alert('El producto ya existe en el carrito. Puedes hacer el uso de los botones + y - en el producto en el carrito para agregar mas productos del mismo')
    } else {
      item.quantity = 1;  
      setCart([...cart, item])
    }
  }

  const removeItemOnCart = (id) => {
      setCart(prevCart => prevCart.filter(product => product.id !== id))
  }

  const maxQty = 5
  const minQty = 1

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if(item.id === id && item.quantity < maxQty) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if(item.id === id && item.quantity !== minQty) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Header 
            totalProducts={totalProducts}
            onClickLogoCart={onClickLogoCart}
            onClickCloseContactIcon={onClickCloseContactIcon}
            onClickHelpIcon={onClickHelpIcon}
            showContact={showContact}
            onClickSendButton={onClickSendButton}
          />
          <Routes>
          <Route
          path="/"
          element={
            <>
              <ProductList addToCart={addToCart} />
              {showCart && (
                <CartProducts
                  cart={cart}
                  removeItemOnCart={removeItemOnCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  clearCart={clearCart}
                  onClickCloseIconCart={onClickCloseIconCart}
                />
              )}
            </>
          }
        />
          </Routes>
        </div>
      </ThemeProvider>
        
  );
}

export default App;
