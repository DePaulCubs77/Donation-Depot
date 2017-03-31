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
  
        <h3>Did you Know ......</h3>
        
        <br/>
        <ul>
          Donations Can Be:
          <br/>
          <br/>
          <li>
           - Tax-deductible
          </li>
          <li>
           - Help others
          </li>
          <li>
           - Good for the Earth
          </li>
          <li>
           - Great to Shop For
          </li>
          <li>
           - Declutter Your Home
          </li>
          <li>
           - Provide Necessities 
          </li>
          <li>
           - Resused
          </li>
          <li>
           - Re-donated
          </li>
          <br/>
          <br/>
          <br/>
          <br/>
          <ul>
            Special Donatable Items:
            <br/>
          <br/>
              <li>
              - Medicine Containers
              </li>
              <li>
              - Old Towels
              </li>
              <li>
              - Used Shoes
              </li>
              <li>
              - Ripped Clothing
              </li>
              <li>
              - Bags
              </li>
              <li>
              - Soaps and Shampoo
              </li>
              <li>
              - Cars
              </li>
              <li>
              - Pet Food/Supplies
              </li>
              <li>
              - Most Anything
              </li>
          </ul>
          
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
