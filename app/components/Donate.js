import * as React from 'react';

import * as axios from 'axios';
import { Select, Row, Col } from 'antd';
const Option = Select.Option;

class Donate extends React.Component {

  // Create Post User Feedback

  

  

  // Data Request Methods

  

  // Initial State

  

  render() {
    return (
      <div>
        <div className="container-fluid"> 
          <div className="row">
        
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h2>Donate or Recycle Choices</h2>
            </div>
            <div className="col-sm-5 col-md-5 col-lg-5">
               
            </div>
          </div>
          <div className="row">
        
            <div className="col-sm-1 col-md-1 col-lg-1">
               
            </div>
        
        
            <div className="col-sm-6 col-md-6 col-lg-6">
               
          Item list


            </div>
        
            <div className="col-sm-5 col-md-5 col-lg-5">
               Charity Information, Charity class, Charity description, Charity Website
                Charity Information, Charity class, Charity description, Charity Website
                Charity Information, Charity class, Charity description, Charity Website

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

Donate.contextTypes = {
  router: React.PropTypes.any
};

export { Donate };
