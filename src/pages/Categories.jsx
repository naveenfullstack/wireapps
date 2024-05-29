import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import HomeProducts from "../components/hoc/HomeProducts";
import { useParams } from "react-router-dom";
import Api from "../Api";
import axios from "axios";

export default function Categories() {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`Fetching ${categoryId}...`);
      try {
        const response = await axios.get(
          `${Api.getCategoriesbyId}/${categoryId}`
        );
        setData(response.data);
      } catch (error) {
        console.error("All categories failed");
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <Header />
      <HomeProducts
        products={data}
        title={categoryId.replace("-", " ")}
      />
    </div>
  );
}
