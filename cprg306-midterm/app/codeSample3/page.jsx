"use client";

import APICallExam from "@/components/apiCallExam";
import { useState } from 'react';

const CodeSample3 = () => {
  const [secretCode, setSecretCode] = useState("");

  const fetchSecretCode = async () => {
    const passcode = "ehen2rfow";
    const WebURL = `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;

    try {
      const response = await fetch(WebURL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setSecretCode(data.secretCode);
    } catch (error) {
      console.error("Oops ! Error in fetching secret code", error);
    }
  };

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create an function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode as part of the url for it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a json with a single field called
          "secretCode". This is the answer to your question.{" "}
        </p>
      </div>

      <div className="p-4">
        <button onClick={fetchSecretCode} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to get your Secret Code
        </button>
        {secretCode && <p className="mt-4 text-lg text-red-500">Your Secret Code is here: {secretCode}</p>}
      </div>
    </div>
  );
};

export default CodeSample3;
