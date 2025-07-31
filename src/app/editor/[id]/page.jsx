'use client'
import React, { useState } from 'react';
import CodeEditor from '../../../components/CodeEditor';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { use } from 'react';

export default  function EditorPage({ params }) {
  const { id } =  use(params);
  const dispatch = useDispatch(); 

  const problemId = useSelector((state) => state.problem.problemId);
  const language = useSelector((state) => state.problem.language);
  const description = useSelector((state) => state.problem.description);
  const code = useSelector((state) => state.problem.problemcode);

  if (id != problemId) 
    return <h1 className="text-red-600 p-6">Problem not found</h1>;

  const setLanguage = (newLanguage) => {
    dispatch({ type: 'problem/setLanguage', payload: newLanguage });
  };
    
  const setCode = (newCode) => {
    dispatch({ type: 'problem/setProblemCode', payload: newCode });
  };

  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const router = useRouter();

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      try {
        if (language === 'javascript') {
          const result = eval(code);
          setOutput(result ? String(result) : 'Code executed successfully');
        } else {
          setOutput(`Mock output for ${language}:\nHello, World!`);
        }
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
      setIsRunning(false);
    }, 1500);
  };

  const submitCode = () => {
    // Later: send `code`, `language`, and `problemId` to your backend
    alert(`Code submitted for Problem ID ${problemId} in ${language}!`);
  };

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-purple-900 via-purple-700 to-black text-white">
      
      {/* Problem Description */}
      <section className="mb-6 p-4 bg-black/40 rounded-lg shadow border border-purple-400">
        <h1 className="text-2xl font-bold mb-2">Problem Description</h1>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </section>

      {/* Code Editor Component */}
      <CodeEditor
        code={code}
        setCode={setCode}
        language={language}
        setLanguage={setLanguage}
        output={output}
        onRun={runCode}
        isRunning={isRunning}
        onBackToDashboard={() => router.push('/dashboard')}
      />

      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={submitCode}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition"
        >
          Submit Solution
        </button>
      </div>
    </main>
  );
}
