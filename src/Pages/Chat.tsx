import React from "react";

const Chat = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Live Chat</h2>
      <div className="border border-gray-300 rounded-lg h-48 overflow-y-scroll p-3">
        <p>
          <strong>Doctor:</strong> How are you feeling today?
        </p>
        <p>
          <strong>Patient:</strong> Feeling much better, thank you!
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-2"
          placeholder="Type your message..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
