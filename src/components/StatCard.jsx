
import { ReducerType } from "@reduxjs/toolkit";
import React from "react";

const StatCard = ({ icon, title, value }) => {

    
    return(
  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-300 text-sm">{title}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
      </div>
      <div className="text-indigo-400">{icon}</div>
    </div>
  </div>
)
}

export default StatCard;