import * as React from 'react';
import { Link } from 'react-router';
import * as axios from 'axios';
import { Select, Row, Col } from 'antd';

// Make a fun facts header with advantages etc. to donating (tax deductable , helping people in need)
// list little known items to donate, besides the usual


class DonateItems extends React.Component {


  

  render() {
    return (
      <div>
        <h3>Fun Facts: </h3>
        <h3>Did you Know </h3>
        <h3>you could Donate. . .</h3>
        <br/>
        <ul>
          <li>
            Old Towels
          </li>
          <li>
          Used Medicine Containers
          </li>
      </ul>
              
            
        
    </div>
    
  
    );
  }
}

//  contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.

DonateItems.contextTypes = {
  router: React.PropTypes.any
};

export { DonateItems };
