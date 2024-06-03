import { JiraIssue } from "../interfaces/jiraIssues";
import { RootState } from "../redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIssues } from "../services/jiraServices";

export const getIssues = createAsyncThunk<
  {
    issues: JiraIssue[];
    total: number;
  },
  void,
  { state: RootState }
>("issues/getIssues", async (_, { getState, rejectWithValue }) => {
  const state = getState().issues;
  try {
    const issues = await fetchIssues({
      projectKey: process.env.REACT_APP_JIRA_PROJECT_KEY as string,
      startAt: state.page * state.pageSize,
      maxResults: state.pageSize,
      status: state.statusFilter || undefined,
      assignee: state.assigneeFilter || undefined,
    });
    return issues;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
