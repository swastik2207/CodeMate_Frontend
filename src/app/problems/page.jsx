"use client";

import Link from "next/link";
import { useState } from "react";

export const problemsData = {
  data: [
    {
      id: "1234",
      name: "Two Sum",
      description:
        "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
      constraints: ["1<=a<=10^5", "1<=b<=10^5"],
      sampleInputs: ["nums = [2, 7, 11, 15], target = 9"],
      sampleOutputs: ["[0, 1]"],
    },
    {
      id: "5678",
      name: "Palindrome Number",
      description:
        "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
      constraints: ["-2^31 <= x <= 2^31 - 1"],
      sampleInputs: ["x = 121", "x = -121", "x = 10"],
      sampleOutputs: ["true", "false", "false"],
    },
    {
      id: "91011",
      name: "Valid Parentheses",
      description:
        "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      constraints: ["1 <= s.length <= 10^4"],
      sampleInputs: ["s = '()'", "s = '()[]{}'", "s = '(]'"],
      sampleOutputs: ["true", "true", "false"],
    },
  ],
  totalItems: 3,
};





export default function ProblemsList() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-purple-900 via-purple-700 to-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Problems List</h1>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "all"
              ? "bg-purple-600 text-white"
              : "bg-black/30 text-purple-200 hover:bg-purple-800/60"
          }`}
        >
          All Problems
        </button>
        <button
          onClick={() => setActiveTab("yours")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "yours"
              ? "bg-purple-600 text-white"
              : "bg-black/30 text-purple-200 hover:bg-purple-800/60"
          }`}
        >
          Your Problems
        </button>
        <button
          onClick={() => setActiveTab("solved")}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "solved"
              ? "bg-purple-600 text-white"
              : "bg-black/30 text-purple-200 hover:bg-purple-800/60"
          }`}
        >
          Solved Problems
        </button>
      </div>

      {/* Problems List */}
      <ul className="space-y-4 max-w-2xl mx-auto">
        {problemsData.data.map((problem) => (
          <li
            key={problem.id}
            className="p-4 border border-purple-100 rounded-lg shadow-lg bg-black/40 hover:bg-purple-800/60 transition"
          >
            <Link
              href={`/problems/${problem.id}`}
            
              className="text-purple-300 hover:text-white font-medium"
            >
              {problem.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
