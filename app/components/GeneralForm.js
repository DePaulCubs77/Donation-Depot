import * as React from 'react';
import { Select, Menu, Dropdown, Icon, Button, Row, Col, Card } from 'antd';
const Option = Select.Option;
class GeneralForm extends React.Component {

  // Form Event Handlers

  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  handleUpdateTextInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  handleSubmitForm(event) {
    event.preventDefault();
    this.props.action(this.state);
  }
  handleUpdateCategory(newVal) {
    this.setState({
      itemname: newVal
    });
  }
  // Initial State

  initializeState() {
    this.setState({    
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
      <div>
        <Row>
        <Col span={24}><br></br></Col>

      </Row>
      <Row>
        <Col span={3}></Col>
        <Col span={12}>
          <h3>Add A Charity</h3>
        </Col>

      </Row>
      <Row><Col span={24}><br></br></Col></Row>
      <Row> <Col span={24}><br></br></Col></Row>

      <Row>
        <Col span={1}></Col>
        <Col span={14}>
      <form onSubmit={(event) => this.handleSubmitForm(event)}>
        
          <div className='form-row'>
              <label htmlFor='itemname'>Item:</label><br/>

              <Select
                  id="itemname"
                  onSelect={(value) => this.handleUpdateCategory(value)}
                  showSearch
                  style={{ width: 200 }}>
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
        <div className='form-row'>
          <label htmlFor='charityname'>Charity Name:</label><br/>
          <input
          style={{ width: 400 }}
            id='charityname'
            type='text'
            onChange={(event) => this.updateInput(event)}        
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='description'>Description:</label><br/>
          <input
          style={{ width: 400 }}
            id='description'
            type='text'
            onChange={(event) => this.updateInput(event)}         
            required
          />
        </div>
   
        <div className='form-row'>
          <label htmlFor='charityurl'>Website:</label><br/>
          <input
          style={{ width: 400 }}
            id='charityurl'
            type='email'
            onChange={(event) => this.updateInput(event)} 
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='charityperson'>Entered By:</label><br/>
          <input
          style={{ width: 200 }}
            id='charityperson'
            type='text'
            onChange={(event) => this.updateInput(event)}        
            required
          />
        </div>
        
        <div className='form-row'>
          <Button
            type='primary'
            loading={this.props.loading}
            htmlType='submit'
          >
            Submit
          </Button>
        </div>
    </form>
  </Col>
          <Col span={9}>
              <Card title="Note:"  style={{ width: 350 }}>
                  <p>Item:  General: Outdoor Furniture, Planters,Gently Used Curtains, Curtain Rods,</p>
                  <p>New or Gently Used Clothing, Furniture, Kitchen Items, Shoes, Jewelry, Handbags, Books, </p>
                  <p>Small Electronics, Lamps and Lighting,</p>
                </Card>
          </Col>   
      </Row>
    </div>
    );
  }
}

GeneralForm.propTypes = {
  action: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,  
};

export { GeneralForm };
