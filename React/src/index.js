import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";
import "antd/dist/antd.css";
import CustomLayout from "./containers/Layout";
import PostList from "./containers/PostsList";

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <PostList />
        <h1>Eyepax JavaScript Hackathon</h1>
      </CustomLayout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
