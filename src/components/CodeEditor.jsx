

import { Play, Code, Users, BarChart3, Settings, LogOut, User, Trophy, Clock, FileText } from 'lucide-react';


const CodeEditor = ({ code, setCode, language, setLanguage, output, onRun, isRunning, onBackToDashboard }) => {
  const languages = [
    'javascript', 'python', 'java', 'cpp', 'c', 'go', 'rust', 'php', 'ruby', 'swift'
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Code Editor</h1>
          <button
            onClick={onBackToDashboard}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Code Editor */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-white/10 text-white border border-white/20 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang} className="bg-gray-800">
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </select>
              <button
                onClick={onRun}
                disabled={isRunning}
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white rounded-lg transition-colors"
              >
                <Play size={16} className="mr-2" />
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full p-4 bg-transparent text-white font-mono resize-none focus:outline-none"
              placeholder="Write your code here..."
              style={{ minHeight: '400px' }}
            />
          </div>

          {/* Output */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">
            <div className="p-4 border-b border-white/20">
              <h3 className="text-white font-semibold">Output</h3>
            </div>
            <div className="p-4 h-full">
              <pre className="text-gray-300 font-mono whitespace-pre-wrap">
                {output || 'Click "Run Code" to see output...'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor