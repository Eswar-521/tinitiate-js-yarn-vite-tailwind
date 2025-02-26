import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const [page, setPage] = useState("login");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MenuBar setPage={setPage} />
      <main className="flex-grow flex justify-center items-center p-4">
        {page === "login" ? <Login /> : <Signup />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
