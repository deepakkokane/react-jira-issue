import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import IssueTable from "./components/IssueTable";
import "./App.css";
import { AppDispatch } from "./redux/store";
import { getIssues } from "./helpers/issueHelper";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Jira Issues</h1>
      <IssueTable />
    </div>
  );
};

export default App;
