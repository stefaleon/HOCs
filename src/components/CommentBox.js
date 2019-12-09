import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentBox extends React.Component {
  state = { comment: "" };

  componentDidMount() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // call an action creator and save the comment
    this.props.saveComment(this.state.comment);

    // clear the text area
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(CommentBox);
