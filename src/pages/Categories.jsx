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
      <div className="flex justify-center">
        <div className="w-full max-w-defult space-y-6">
          <HomeProducts products={data} title={categoryId.replace("-", " ")} />
        </div>
      </div>
    </div>
  );
}
