import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  setPage,
  setStatusFilter,
  setAssigneeFilter,
} from "../redux/issueSlice";
import IssueTableRow from "./IssueTableRow";
import { getIssues } from "../helpers/issueHelper";
import Select from "./Select";
import { statusOptions } from "../constants/constants";

const IssueTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    issues,
    loading,
    error,
    page,
    statusFilter,
    assigneeFilter,
    total,
    pageSize,
  } = useSelector((state: RootState) => state.issues);

  let assignees = issues
    .map((issue) => issue.fields.assignee?.displayName)
    .filter((assignee): assignee is string => Boolean(assignee));

  let uniqueAssignees = Array.from(new Set(assignees));

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getIssues());
  };

  const handleStatusFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setStatusFilter(e.target.value));
    dispatch(getIssues());
  };

  const handleAssigneeFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setAssigneeFilter(e.target.value));
    dispatch(getIssues());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading issues: {error}</p>;

  const assigneeOptions = [
    { value: "", label: "All" },
    ...uniqueAssignees.map((assignee) => ({
      value: assignee,
      label: assignee,
    })),
  ];

  const maxPage = Math.ceil(total / pageSize); // Calculate the maximum page number

  const hasNextPage = page + 1 < maxPage;

  return (
    <div>
      <div className="selects">
        <Select
          label="Status:"
          value={statusFilter}
          onChange={handleStatusFilterChange}
          options={statusOptions}
        />
        <Select
          className="ml"
          label="Assignee:"
          value={assigneeFilter}
          onChange={handleAssigneeFilterChange}
          options={assigneeOptions}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Summary</th>
            <th>Type</th>
            <th>Status</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          {issues.length > 0 ? (
            issues.map((issue) => (
              <IssueTableRow key={issue.id} issue={issue} />
            ))
          ) : (
            <h4>No issues found!</h4>
          )}
        </tbody>
      </table>
      <div className="selects">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!hasNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IssueTable;
