import React from "react";
import { Route, Link } from "react-router-dom";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import CommentsFetch from "./components/CommentsFetch";

import "./App.css";

const header = () => {
  return (
    <ul className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post</Link>
      </li>
      <li>
        <Link to="/fetch">Fetch</Link>
      </li>
      <li>{authButton(true)}</li>
    </ul>
  );
};

const authButton = isSignedIn => {
  return <button>{isSignedIn ? "Sign Out" : "Sign In"}</button>;
};

function App() {
  return (
    <div className="App">
      {header()}
      <Route path="/post" component={CommentBox} />
      <Route path="/fetch" component={CommentsFetch} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}

export default App;
