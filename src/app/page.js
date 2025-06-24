"use client";

import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { useRouter } from "next/navigation"; // ✅ FIXED
import LandingPage from "../components/LandingPage";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("landing");
  const router = useRouter(); // ✅ App Router hook

  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("landing");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Navbar user={user} onNavigate={setCurrentPage} onLogout={handleLogout} />

      <div className="pt-16">
        {currentPage === "landing" && (
          <LandingPage
            onLogin={() => router.push("/login")}
            onSignup={() => router.push("/signup")}
          />
        )}
      </div>
    </div>
  );
}
