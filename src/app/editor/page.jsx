'use client'
import React, { useState } from 'react';
import CodeEditor from '../../components/CodeEditor';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

export default function EditorPage() {
  const dispatch = useDispatch(); 
  const code = useSelector((state) => state.code.code);
  const language = useSelector((state) => state.code.language);
  const setLanguage = (newLanguage) => {
    dispatch({ type: 'code/setLanguage', payload: newLanguage });
    
  };
    
  const setCode = (newCode) => {dispatch({ type: 'code/setCode', payload: newCode })
  console.log('Code updated:', code)
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
