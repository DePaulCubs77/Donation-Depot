import * as React from 'react';
import { Select, Menu, Dropdown, Icon, Button, Row, Col } from 'antd';
const Option = Select.Option;
class CommentForm extends React.Component {

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
      comdescription: newVal
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
        <Col span={24}><br></br></Col>

      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={16}>
          <h3>Add A Comment Or Tip </h3>
        </Col>

      </Row>
      <Row>
        <Col span={24}><br></br></Col>

      </Row>
      <Row>
        <Col span={24}><br></br></Col>

      </Row>

      <Row>
        <Col span={5}></Col>
        <Col span={14}>

      <form onSubmit={(event) => this.handleSubmitForm(event)}>
        <div className='form-row'>
          <label htmlFor='comdescription'>Comment:</label><br/>
          <input
          style={{ width: 600 }}
          defaultValue={this.state.comdescription}
            id='comdescription'
            type='text'
            onChange={(event) => this.handleUpdateTextInput(event)}
            
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
      <Col span={5}></Col>
      </Row>
      </div>
    );
  }
}

CommentForm.propTypes = {
  action: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool
  
};
export { CommentForm };
