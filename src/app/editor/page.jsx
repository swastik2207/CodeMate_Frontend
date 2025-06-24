'use client'
import React, { useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import { useRouter } from 'next/navigation';

export default function EditorPage() {
  const [code, setCode] = useState('// Start coding');
  const [language, setLanguage] = useState('javascript');
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

  return (
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
  );
}
