import * as React from 'react';
import { Link } from 'react-router';
import { Row, Col, Popover, Button } from 'antd';

const content1 = (
  <div>
    <p>Help Others</p>
    <p>Donations Can</p>
    <p>Be Tax Deductable</p>
  </div>
);
const content2 = (
  <div>
    <p>For an Item</p>
    <p>See Different</p>
    <p>Charities</p>
  </div>
);
const content3 = (
  <div>
    <p>See Tips and</p>
    <p>Comments that</p>
    <p>have been left</p>
  </div>
);
const content4 = (
  <div>
    <p>Add a Tip or</p>
    <p>Comment for</p>
    <p>others</p>
  </div>
);
const content5 = (
  <div>
    <p>Know a Great</p>
    <p>Charity? Add</p>
    <p>it to share</p>
  </div>
);


class HiHeader extends React.Component {
  render() {
    return (
    
  //    <div className='header'>
        
         <div> 

        <ul>
          <li>
            <div className='donationtitle'>Donation Depot  </div>
            <h2>  </h2>
          </li>
          
          <li>
            <Popover content={content1}> 
                <Link to='home' activeClassName='active' >
                  Home
                </Link>
            </Popover>
          </li>
          <li>
            <Popover content={content2}>  
                <Link to='donate' activeClassName='active'>
                  Donation
                </Link>
            </Popover>
          </li>         
          <li>
            <Popover content={content3}> 
              <Link to='commenttip' activeClassName='active'>
                Comments
              </Link>
            </Popover>
          </li>
          <li>
            <Popover content={content4}> 
              <Link to='addcomment' activeClassName='active'>
                Add Comment
              </Link>
            </Popover>
          </li>
          

          <li>
            <Popover content={content5}> 
              <Link to='addcharity' activeClassName='active'>
                Add Charity
              </Link>
            </Popover>
          </li>

        </ul>
      </div>
    
    );
  }
}

export { HiHeader };
