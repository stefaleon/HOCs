import React from "react";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import CommentsFetch from "./components/CommentsFetch";

function App() {
  return (
    <div className="App">
      <CommentBox />
      <hr />
      <CommentsFetch />
      <hr />
      <CommentList />
    </div>
  );
}

export default App;
