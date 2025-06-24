import React from "react";


import { Play, Code, Users, BarChart3, Settings, LogOut, User, Trophy, Clock, FileText } from 'lucide-react';
import StatCard from "./StatCard";
const Dashboard = ({ user, stats, onNavigateToEditor }) => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">Welcome back, {user.name}! Ready to code?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={<Trophy size={24} />} title="Problems Solved" value={stats.problemsSolved} />
          <StatCard icon={<FileText size={24} />} title="Total Submissions" value={stats.totalSubmissions} />
          <StatCard icon={<BarChart3 size={24} />} title="Success Rate" value={`${stats.successRate}%`} />
          <StatCard icon={<Clock size={24} />} title="Current Streak" value={`${stats.streak} days`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                onClick={onNavigateToEditor}
                className="w-full p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-left transition-colors flex items-center"
              >
                <Code size={20} className="mr-3" />
                Open Code Editor
              </button>
              <button className="w-full p-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-left transition-colors flex items-center">
                <Users size={20} className="mr-3" />
                Join Coding Challenge
              </button>
              <button className="w-full p-4 bg-white/10 hover:bg-white/20 text-white rounded-lg text-left transition-colors flex items-center">
                <Settings size={20} className="mr-3" />
                Account Settings
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {stats.recentActivity.map((activity, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{activity.problem}</p>
                    <p className="text-gray-300 text-sm">{activity.language} • {activity.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    activity.status === 'Solved' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;