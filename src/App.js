import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./features/products/productsSlice";
import {
  fetchMensClothing,
  fetchWomensClothing,
  fetchJewelery,
  fetchElectronics,
  fetchAllCategories
} from "./features/products/categoriesSlice";

/* IMPORT COMPONENTS */
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchAllCategories());
    dispatch(fetchMensClothing());
    dispatch(fetchWomensClothing());
    dispatch(fetchJewelery());
    dispatch(fetchElectronics());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories/:categoryId" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
