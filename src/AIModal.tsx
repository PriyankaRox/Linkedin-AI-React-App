import React, { useState } from "react";

const AIModal: React.FC = () => {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  const generateResponse = () => {
    setResponse(
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    );
  };

  const insertResponse = () => {
    const inputField = document.querySelector(
      "input.message-input-selector"
    ) as HTMLInputElement;
    if (inputField) {
      inputField.value = response;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-semibold mb-4">Generate AI Response</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter your command..."
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={generateResponse}
        >
          Generate
        </button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2">
          Regenerate
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={insertResponse}
        >
          Insert
        </button>

        {response && (
          <p className="mt-4 p-4 bg-gray-100 border rounded">{response}</p>
        )}
      </div>
    </div>
  );
};

export default AIModal;
