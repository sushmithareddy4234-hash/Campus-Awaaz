import React from "react";

function ResolvedIssues({ issues }) {
  const resolvedIssues = issues.filter((issue) => issue.resolved);

  if (resolvedIssues.length === 0) return null;

  return (
    <div>
      <h3 className="text-center mb-6 text-lg font-semibold text-green-700">
        ✅ Resolved Issues
      </h3>

      {resolvedIssues.map((issue) => (
        <div key={issue.id} className="mb-6 bg-green-50 p-4 rounded-lg shadow">

          <h4 className="font-bold">{issue.title}</h4>
          <p className="text-sm text-gray-600 mb-2">
            {issue.description}
          </p>

          <div className="bg-white p-3 rounded border-l-4 border-green-500">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Resolution:</span>{" "}
              {issue.resolution}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ResolvedIssues;