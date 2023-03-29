import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { Helmet } from "react-helmet";
import { FaOpencart } from "react-icons/fa";
import { renderToString } from "react-dom/server";

function App() {
  // Create a styled icon with white fill color
  const StyledCartIcon = () => (
    <FaOpencart size={25} style={{ color: "#2CBCE9" }} />
  );

  // Convert the styled icon to a base64 string
  const cartIconString = renderToString(<StyledCartIcon />);
  const cartIconBase64 = btoa(cartIconString);

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
  ]);

  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml;base64,${cartIconBase64}`}
        />
        <meta name="description" content="This is a description" />
      </Helmet>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
