import * as React from 'react';
import { CommentForm } from './CommentForm';
import { notification, Row, Col } from 'antd';
import * as axios from 'axios';

class AddComment extends React.Component {

  // Create Post User Feedback

  startLoading() {
    this.setState({
      loading: true
    });
  }

  endLoading() {
    this.setState({
      loading: false
    });
  }

  redirectToPosts() {
    this.context.router.push('comment');
  }

  sendSuccessNotification() {
    notification['success']({
      message: 'Yayyy!!',
      description: 'Your comment has been created.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Uh Oh',
      description: 'Something went wrong, please try again.',
    });
  }

  // Data Request Methods

  createPost(postObj) {
    this.startLoading();
    axios.post('/home', postObj)
      .then(() => {
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToPosts();
      })
      .catch((error) => {
        this.sendErrorNotification();
        this.endLoading();
      });
  }

  // Setting Initial State

  initializeState() {
    this.setState({
      loading: false
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <PostForm
          loading={this.state.loading}
          submitAction={(postObj) => this.createPost(postObj)}
          defaultTitle={'Subject'}
          defaultCategory={'CommentTip'}
          
        />
      </div>
    )
  }
}

//  contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.
AddComment.contextTypes = {
  router: React.PropTypes.any
};

export { AddComment };