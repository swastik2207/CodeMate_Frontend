"use client";
import React from "react";
import { Code, Play, BarChart3 } from "lucide-react";



const features = [
  {
    icon: <Code size={32} />,
    title: "Multi-Language Support",
    desc: "Execute code in 20+ programming languages",
  },
  {
    icon: <Play size={32} />,
    title: "Instant Execution",
    desc: "Run your code instantly with real-time output",
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Performance Analytics",
    desc: "Track your coding progress and statistics",
  },
];

const LandingPage = ({ onLogin, onSignup }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Code. Execute. Excel.
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          The most powerful online code execution platform for developers,
          students, and coding enthusiasts.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={onSignup}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Get Started Free
          </button>
          <button
            onClick={onLogin}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all"
          >
            Login
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all"
          >
            <div className="text-indigo-300 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
