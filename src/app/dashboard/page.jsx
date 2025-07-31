'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "../../components/Dashboard";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({ name: "" });
  const [stats, setStats] = useState({
    problemsSolved: 0,
    totalSubmissions: 0,
    successRate: 0,
    streak: 0,
    recentActivity: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (true) {
    //  router.push("/login"); // redirect if no tok
      setIsAuth(true);
      // Load dummy user info
      setUser({ name: "Swastik" });

      // Load dummy stats
      setStats({
        problemsSolved: 5,
        totalSubmissions: 12,
        successRate: 83,
        streak: 3,
        recentActivity: [
          { problem: "Two Sum", language: "C++", time: "2h ago", status: "Solved" },
          { problem: "Palindrome Number", language: "Python", time: "1d ago", status: "Unsolved" },
        ],
      });
    }
  }, [router]);

  const handleNavigateToEditor = () => {
    router.push("/editor"); // example problem ID
  };

  if (!isAuth) {
    return <div className="text-center text-white mt-20">Checking authentication...</div>;
  }

  return <Dashboard user={user} stats={stats} onNavigateToEditor={handleNavigateToEditor} />;
}
