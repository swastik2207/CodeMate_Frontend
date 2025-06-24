'use client';

import React from 'react';
import { LogOut } from 'lucide-react';


export default function NavBar({ user, onNavigate, onLogout }) {
  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => onNavigate(user ? 'dashboard' : 'landing')}
          >
            CodeLab
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-white">Welcome, {user.name}</span>
                <button
                  onClick={() => onNavigate('editor')}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Code Editor
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => onNavigate('login')}
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
