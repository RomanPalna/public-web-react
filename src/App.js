import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MainPage from "./components/Main/Main";
import Price from "./components/Price/Price";
import Order from "./components/Order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function App() {
  const wellcome = useSelector((state) => state.wellcome.wellcome);
  return (
    <>
      {wellcome ? <NavigationBar /> : <></>}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/price" element={<Price />} />
        <Route path="/order" element={<Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
