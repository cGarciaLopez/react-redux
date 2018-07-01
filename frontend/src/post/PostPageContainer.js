import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { retrievePost } from "./reducer";
import { postSelector } from "./reducer";

import { push } from 'react-router-redux';

import PostPage from "./PostPage";
import NotFoundPage from "../NotFoundPage";

class ViewCategoryContainer extends Component {
  componentDidMount() {
    this.props.retrievePost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    // Post was deleted. Redirect user to category page

console.log('PostPageContainer this.props ' + this.props.post);
console.log('PostPageContainer nextProps ' + nextProps.post);

    // if (this.props.post === undefined && nextProps.post === undefined) {
      // this.props.redirectTo(`/${this.props.post.category}`);
      if (nextProps.post === undefined) {
      // this.props.redirectTo('/404');
      return null;
    }
  }

  render() {
    if ( this.props.post === undefined) {
        return <NotFoundPage />
    } else {
      return (
        <PostPage post={this.props.post} />
      );
    }

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    retrievePost,
    redirectTo: path => push(path)
  }, dispatch)
};

const mapStateToProps = (state, ownProps) => ({
  post: postSelector(state.posts, ownProps.match.params.postId)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ViewCategoryContainer)
);
