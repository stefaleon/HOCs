import React from "react";
import { Route } from "react-router-dom";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import CommentsFetch from "./components/CommentsFetch";

function App() {
  return (
    <div className="App">
      <Route path="/post" component={CommentBox} />
      <Route path="/fetch" component={CommentsFetch} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}

export default App;
