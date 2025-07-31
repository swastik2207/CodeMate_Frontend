 "use client";
 import { use } from "react";
 import { useRouter } from "next/navigation";
 import { useSelector, useDispatch } from 'react-redux';
 const problemsData = {
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

export default function ProblemDetail({ params }) {

  const {id}= use(params);
  const router = useRouter();
  const dispatch = useDispatch(); 

  const setProblemId = (newId) => {
    dispatch({ type: 'problem/setProblemId', payload: newId });
  }
  const setProblemDescription = (newDescription) => {
    dispatch({ type: 'problem/setProblemDescription', payload: newDescription });  }


  
  const problem = problemsData.data.find((p) => p.id === (id));

  if (!problem) {
    return <h1 className="text-red-600 p-6">Problem not found</h1>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{problem.name}</h1>
      <p className="mb-4">{problem.description}</p>

      <h2 className="font-semibold">Constraints:</h2>
      <ul className="list-disc list-inside mb-4">
        {problem.constraints.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>

      <h2 className="font-semibold">Sample Inputs:</h2>
      <pre className="bg-gray-800 p-2 mb-4">{problem.sampleInputs.join("\n")}</pre>

      <h2 className="font-semibold">Sample Outputs:</h2>
      <pre className="bg-gray-800 p-2">{problem.sampleOutputs.join("\n")}</pre>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={() =>{
            setProblemId(id);   
            setProblemDescription(problem.description); 
            router.push(`/editor/${id}`)}}>
            Solve IT
        </button>
    </main>
  );
}
