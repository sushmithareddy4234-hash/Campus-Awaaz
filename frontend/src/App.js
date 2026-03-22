import React, { useState } from "react";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import ResolvedIssues from "./ResolvedIssues";

function App() {
  const [issues, setIssues] = useState([]);

  // Add issue
  const addIssue = (title, description) => {
    const newIssue = {
      id: Date.now(),
      title,
      description,
      votes: 0,
      voters: [],
      resolved: false,
      resolution: "",
    };

    setIssues((prev) => [newIssue, ...prev]);
  };

  // Vote
  const voteIssue = (id, voterDetails) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id
          ? {
              ...issue,
              votes: issue.votes + 1,
              voters: [...(issue.voters || []), voterDetails],
            }
          : issue
      )
    );
  };

  // Resolve with message
  const resolveIssue = (id, message) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === id
          ? { ...issue, resolved: true, resolution: message }
          : issue
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-200 via-cyan-300 to-blue-400">

      <div className="w-[800px] bg-white shadow-2xl rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-teal-800 text-white text-center py-8 text-3xl font-bold">
          Campus Awaaz
        </div>

        <div className="p-10">

          <IssueForm addIssue={addIssue} />

          <hr className="my-8" />

          {/* Active Issues */}
          <IssueList
            issues={issues}
            voteIssue={voteIssue}
            resolveIssue={resolveIssue}
          />

          <hr className="my-8" />

          {/* ✅ Resolved Issues Section */}
          <ResolvedIssues issues={issues} />

        </div>

      </div>

    </div>
  );
}

export default App;