import React, { useState, useEffect } from "react";

import "./App1.css";
import Sizes from "./components/Sizes";
import Products from "./components/Products";
import Cart from "./components/Cart";
import filterList from "./components/filterList";
import Footer from "./Footer";

const App1 = () => {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(filterList([], null));
    if (JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const setSize = (size) => {
    const sizes = [...selectedSizes];

    if (sizes.includes(size)) {
      const index = sizes.indexOf(size);
      sizes.splice(index, 1);
    } else {
      sizes.push(size);
    }
    setSelectedSizes(sizes);
    setProducts(filterList(sizes, "size"));
  };

  const sortProducts = (method) => {
    const array = products;

    if (method === "Lowest to Highest") {
      array.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (method === "Highest to Lowest") {
      array.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setProducts(array);
  };

  const addToCart = (item) => {
    const productList = [...cart];
    if (!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  };

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);
    if (e === "+") {
      productList[index].quantity++;
    } else {
      if (productList[index].quantity > 1) {
        productList[index].quantity--;
      } else {
        productList.splice(index, 1);
      }
    }
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  };

  return (
    <div style={{ backgroundColor: "gold" }}>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-transparent"
          style={{ backgroundColor: "grey", height: "70px" }}
        >
          <div className="container-fluid " id="nameMain">
            <a className="navbar-brand" href="App1">
              <img
                src="./images/logo.png"
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-center "
              />
              <span style={{ fontSize: "30px", fontWeight: "500" }}>
                Xpress Xpert
              </span>
            </a>
            <div
              className="collapse navbar-collapse row"
              id="navbarSupportedContent"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Cart products={cart} changeQuantity={changeQuantity} />
              </div>
            </div>
          </div>
        </nav>

        {/* <Navmain/>  */}
      </div>
      <div className="App">
        <Sizes selectedSizes={selectedSizes} setSize={setSize} />
        <Products
          products={products}
          sortProducts={sortProducts}
          addToCart={addToCart}
        />
        {/* <Cart products={cart} changeQuantity={changeQuantity} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App1;
