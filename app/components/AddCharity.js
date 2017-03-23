import * as React from 'react';
import { GeneralForm } from './GeneralForm';
import * as axios from 'axios';
import { notification, Row, Col } from 'antd';

class AddCharity extends React.Component {

  // Create Post User Feedback

  sendSuccessNotification() {
    notification['success']({
      message: 'Success!',
      description: 'Adding a new Charity',
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
    axios.post('/home', newData)
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
        <div className="container-fluid"> 
          <div className="row">
        
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h2>Add a Charity</h2>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
               
            </div>
          </div>
          <div className="row">
        
            <div className="col-sm-1 col-md-1 col-lg-1">
               
            </div>
        
        
            <div className="col-sm-6 col-md-6 col-lg-6">
               
                <GeneralForm
                 loading={this.state.loading}
                 action={(newData) => this.saveNewCharity(newData)}
                defaultName={'Charity Name'}
                defaultDescription={'Charity Description'}
                defaultWebsite={'Charity Website'}
                defaultItem={'Item'}
                   />
            </div>
        
            <div className="col-sm-5 col-md-5 col-lg-5">
               
            </div>
        </div>
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
