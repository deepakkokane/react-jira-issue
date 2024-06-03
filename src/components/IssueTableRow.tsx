import React from "react";
import { JiraIssue } from "../interfaces/jiraIssues";

interface IssueTableRowProps {
  issue: JiraIssue;
}

const IssueTableRow: React.FC<IssueTableRowProps> = ({ issue }) => {
  return (
    <tr>
      <td>{issue.key}</td>
      <td>{issue.fields.summary}</td>
      <td>{issue.fields.issuetype.name}</td>
      <td>{issue.fields.status.name}</td>
      <td>
        {issue.fields.assignee
          ? issue.fields.assignee.displayName
          : "Unassigned"}
      </td>
    </tr>
  );
};

export default IssueTableRow;
