import * as React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'antd';

class HiHeader extends React.Component {
  render() {
    return (
    
  //    <div className='header'>
        
         <div> 

        <ul>
          <li>
            <h1>Donation Depot</h1>
          </li>
          
          <li>
            <Link to='home' activeClassName='active' >
              <Button>Home</Button>
            </Link>
          </li>
          <li>
            <Link to='donate' activeClassName='active'>
              <Button>Donation</Button>
            </Link>
          </li>

          
          <li>
            <Link to='commenttip' activeClassName='active'>
              <Button>Comments</Button>
            </Link>
          </li>

        </ul>
      </div>
    
    );
  }
}

export { HiHeader };
