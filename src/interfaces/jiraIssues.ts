export interface JiraIssue {
  id: string;
  key: string;
  fields: {
    summary: string;
    issuetype: { name: string };
    status: { name: string };
    assignee: { displayName: string } | null;
  };
}

export interface IssuesState {
  issues: JiraIssue[];
  loading: boolean;
  error: string | null;
  page: number;
  pageSize: number;
  statusFilter: string | null;
  assigneeFilter: string | null;
  total: number;
}

export interface FetchIssuesParams {
  projectKey: string;
  startAt?: number;
  maxResults?: number;
  status?: string;
  assignee?: string;
}
