import React from "react";
import CartPage from "./components/CartPage";
import { ShareProvider } from "./components/Sharecontext";
import NavContainer from "./components/NavContainer"

export default function App() {
  return (
    <ShareProvider>
      <NavContainer/>
      <CartPage/>
    </ShareProvider>
  );
}
