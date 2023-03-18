import { useState } from "react";
import CartSide from "./global/CartSide";
import Header from "./global/Header";
import Sidebar from "./global/Sidebar";
import Router from "./Router/Router";

function App() {

  const [cartOpen, setCartOpen] = useState(false);

  const toggleDrawer = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="mt-16 ml-16 md:ml-40 transition-all ease-in-out duration-500">
          <Router />
        </main>

        <button
          className="fixed top-32 right-0 rounded-l-lg z-30 bg-gray-300 hover:bg-gray-800 hover:text-gray-50 px-2 py-1 drawer-button transition-all ease-in duration-150 text-center shadow-lg"
          onClick={toggleDrawer}
        >
          <h4>Items: 0</h4>
          <p>$: 0</p>
        </button>
        <CartSide
          cartOpen={cartOpen}
          toggleDrawer={toggleDrawer}
        />
      </div>
    </div>
  );
}

export default App;



// devkbin101
// RbBQX83sWmHZSktN
