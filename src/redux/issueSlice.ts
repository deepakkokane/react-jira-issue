import { createSlice } from "@reduxjs/toolkit";
import { getIssues } from "../helpers/issueHelper";
import { IssuesState } from "../interfaces/jiraIssues";

const initialState: IssuesState = {
  issues: [],
  loading: false,
  error: null,
  page: 0,
  pageSize: 10,
  statusFilter: null,
  assigneeFilter: null,
  total: 0,
};

const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
    setAssigneeFilter: (state, action) => {
      state.assigneeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIssues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.issues = action.payload.issues;
        state.total = action.payload.total;
      })
      .addCase(getIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setStatusFilter, setAssigneeFilter } =
  issuesSlice.actions;

export default issuesSlice.reducer;
