import axios from "axios";

export const jiraApi = axios.create({
  baseURL: process.env.REACT_APP_JIRA_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_JIRA_API_TOKEN}`,
    "Content-Type": "application/json",
  },
});
