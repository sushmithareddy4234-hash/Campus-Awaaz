import React, { useState } from "react";

function IssueForm({ addIssue }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    addIssue(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h3 className="text-center mb-6 text-lg font-semibold">
        Report Issue
      </h3>

      <input
        type="text"
        placeholder="Issue Title"
        className="w-full mb-4 p-2 border-b outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Issue Description"
        className="w-full mb-4 p-2 border-b outline-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-teal-700 text-white py-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}

export default IssueForm;