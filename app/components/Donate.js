import * as React from 'react';

import * as axios from 'axios';
import { notification, Row, Col, Select, Button,Card } from 'antd';

const Option = Select.Option;

class Donate extends React.Component {

startLoading() {
    this.setState({
     loading: true
    });
  }

  endLoading() {
      this.setState({
     loading: false,
    });
  }

  sendSuccessNotification() {
    
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Try Again',
      description: 'An unexpected error occurred, please try again.',
    });
  }


handleUpdateCategory(newVal) {
    this.setState({
      itemname: newVal
    });
  this.startLoading();
  console.log("new val",newVal);
  axios.get('/item?itemname=' + newVal )
  
      .then((response) => {
        this.endLoading();
        this.sendSuccessNotification();
        this.setState({ charityList: response.data});
        
      })
      .catch((error) => {
        this.endLoading();
        this.sendErrorNotification();
      });
  }


  // Initial State

  initializeState() {
    this.setState({
      loading: false,
      charityList: []
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
 <div>
      <Row> <Col span={24}><br></br></Col></Row>
      <Row>
          <Col span={12}></Col>
          <Col span={8}>
            <h3>Find Donation Places</h3>
          </Col>
          <Col span={4}></Col>
      </Row>
      
      <Row> <Col span={24}><br></br></Col></Row>
      <Row> <Col span={24}><br></br></Col></Row>
      <Row>
        <Col span={1}></Col>
        <Col span={9}>
            <div>
            <label htmlFor='itemname'>Item:</label><br/>
            <Select
              id="itemname"
                showSearch
                style={{ width: 200 }}
                onChange={(value) => this.handleUpdateCategory(value)}
                >
                <Option value="general">General</Option>
                  <Option value="towels">Old Towels</Option>
                  <Option value="petfood">Pet Food</Option>
                  <Option value="pettoy">Pet Toys and Furniture</Option>
                  <Option value="blankets">Blankets</Option>
                  <Option value="gymshoe">Gym Shoes/Sneakers</Option>
                  <Option value="clothing">Old Clothing</Option>
                  <Option value="pillows">Pillows</Option>  
                  <Option value="material">Old torn and worn Clothing</Option>
                  <Option value="kitchen">Kitchen Cabinets, Sinks, Boards</Option>
                  <Option value="underwear">New Underwear and Socks</Option>
                  <Option value="toiletries">Soap, Shampoo, Toiletries</Option>
                  <Option value="glasses">Glasses</Option>
                  <Option value="car">Car</Option>              
                  <Option value="food">Food</Option>
                  <Option value="bags">Plastic, Paper, or Cloth Bags</Option>   
                  <Option value="meds">Used Clean Medicine Containers</Option> 
              </Select>
              </div>
              <br></br><br></br><br></br>
              <div>
              <Card title="Note:"  style={{ width: 275 }}>
                  <p>Item Type  GENERAL: Outdoor Furniture, Planters,Gently Used Curtains, Curtain Rods,</p>
                  <p>New or Gently Used Clothing, Furniture, Kitchen Items, Shoes, Jewelry, Handbags, Books, </p>
                  <p>Small Electronics, Lamps and Lighting,</p>
                  <p> -** Try some of the other categories too for </p>
                  <p>   interesting donation ideas </p>
              </Card>
              </div>

        </Col>

        <Col span={13}>
          
            {/* render the items for the state*/}                                      
              <ul>
                  <li>{this.state.charityList.map(charity => (<div key={charity._id}>
                    <p>{charity.charityname}</p>
                    <p>{charity.description}</p>
                    <p>{charity.charityurl}</p>
                    <p>  </p>
                    <br></br>
                    </div>))} </li> 
                
             </ul>
        </Col>
              
      </Row>
    </div> 
    );
  }
}


Donate.contextTypes = {
  router: React.PropTypes.any
};

export { Donate };
