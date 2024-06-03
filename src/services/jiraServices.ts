import { jiraApi } from "../config/axios";
import { FetchIssuesParams, JiraIssue } from "../interfaces/jiraIssues";

export const fetchIssues = async ({
  projectKey,
  startAt = 0,
  maxResults = 10,
  status,
  assignee,
}: FetchIssuesParams): Promise<{
  issues: JiraIssue[];
  total: number;
}> => {
  try {
    let jql = `project=${projectKey}`;
    if (status) {
      jql += ` AND status="${status}"`;
    }
    if (assignee) {
      jql += ` AND assignee="${assignee}"`;
    }
    const response = await jiraApi.get(`/jira`, {
      params: { jql, startAt, maxResults },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
