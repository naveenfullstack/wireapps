import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center py-4 font-primary text-title border-b">
      <h1 className="hover:cursor-pointer" onClick={() => navigate("/")}>
        Modern Walk
      </h1>
    </div>
  );
}
