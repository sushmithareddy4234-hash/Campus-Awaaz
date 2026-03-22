import React, { useState } from "react";

function IssueList({ issues, voteIssue, resolveIssue }) {
  const [activeIssue, setActiveIssue] = useState(null);
  const [reason, setReason] = useState("");
  const [proof, setProof] = useState(null);
  const [confirm, setConfirm] = useState(false);

  const [adminActive, setAdminActive] = useState(null);
  const [adminMsg, setAdminMsg] = useState("");

  const handleVote = (id) => {
    if (!confirm) {
      alert("Please confirm that you are facing this issue");
      return;
    }

    voteIssue(id, { reason, proof });

    setActiveIssue(null);
    setReason("");
    setProof(null);
    setConfirm(false);
  };

  const handleResolve = (id) => {
    if (!adminMsg) {
      alert("Please provide resolution details");
      return;
    }

    resolveIssue(id, adminMsg);

    setAdminActive(null);
    setAdminMsg("");
  };

  return (
    <div>
      <h3 className="text-center mb-6 text-lg font-semibold">
        Campus Issues
      </h3>

      {issues
        .filter((issue) => !issue.resolved)
        .map((issue) => (
          <div key={issue.id} className="mb-6 bg-gray-50 p-4 rounded-lg shadow">

            <h4 className="font-bold">{issue.title}</h4>
            <p className="text-sm text-gray-600">{issue.description}</p>
            <p className="mt-2 font-semibold">Votes: {issue.votes}</p>

            <div className="flex gap-3 mt-2">

              <button
                onClick={() => setActiveIssue(issue.id)}
                className="bg-teal-600 text-white px-3 py-1 rounded"
              >
                Upvote
              </button>

              <button
                onClick={() => setAdminActive(issue.id)}
                className="bg-orange-500 text-white px-3 py-1 rounded"
              >
                Resolve Issue
              </button>

            </div>

            {/* USER VOTE FORM */}
            {activeIssue === issue.id && (
              <div className="mt-4 bg-white p-4 rounded shadow">

                <textarea
                  placeholder="Explain how this issue affects you"
                  className="w-full mb-3 p-2 border rounded"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />

                <input
                  type="file"
                  className="w-full mb-3"
                  onChange={(e) => setProof(e.target.files[0])}
                />

                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={confirm}
                    onChange={() => setConfirm(!confirm)}
                  />
                  I am also facing this issue
                </label>

                <button
                  onClick={() => handleVote(issue.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Submit Vote
                </button>
              </div>
            )}

            {/* ADMIN RESOLVE FORM */}
            {adminActive === issue.id && (
              <div className="mt-4 bg-white p-4 rounded shadow border-l-4 border-orange-500">

                <textarea
                  placeholder="Describe how the issue was resolved (e.g., discussed with lecturer, action taken...)"
                  className="w-full mb-3 p-2 border rounded"
                  value={adminMsg}
                  onChange={(e) => setAdminMsg(e.target.value)}
                />

                <button
                  onClick={() => handleResolve(issue.id)}
                  className="bg-orange-600 text-white px-4 py-2 rounded"
                >
                  Submit Resolution
                </button>
              </div>
            )}

          </div>
        ))}
    </div>
  );
}

export default IssueList;