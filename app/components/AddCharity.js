import * as React from 'react';
import { GeneralForm } from './GeneralForm';
import * as axios from 'axios';
import { notification, Row, Col, Card } from 'antd';

class AddCharity extends React.Component {

  // Create Post User Feedback

  sendSuccessNotification() {
    notification['success']({
      message: 'Success!',
      description: 'Added a new Charity',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Try Again',
      description: 'An unexpected error occurred, please try again.',
    });
  }

  redirectToHome() {
    this.context.router.push('/home');
  }

  startLoading(callback, args) {
    this.setState({
      loading: true
    }, () => callback(args));
  }

  endLoading() {
    this.setState({
      loading: false,
    });
  }

  // Data Request Methods

  sendNewCharityRequest(newData) {
    console.log("newdata",newData);
    axios.post('/add-charity', newData)
      .then((data) => {
        this.endLoading();
        this.sendSuccessNotification();
        this.redirectToHome();
      })
      .catch((error) => {
        this.endLoading();
        this.sendErrorNotification();
      });
  }

  saveNewCharity(newData) {
    this.startLoading(() =>
      this.sendNewCharityRequest(newData)
    );
  }

  // Initial State

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
        
        <div>
               
                <GeneralForm
                 loading={this.state.loading}
                 action={(newData) => this.saveNewCharity(newData)}
                   />
            </div>     
    
    </div>
     
    );
  }
}

//  contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.

AddCharity.contextTypes = {
  router: React.PropTypes.any
};

export { AddCharity };
