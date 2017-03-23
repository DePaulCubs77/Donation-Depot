import * as React from 'react';
import { Select, Menu, Dropdown, Icon, Button, Row, Col } from 'antd';
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
      category: newVal
    });
  }
  // Initial State

  initializeState() {
    this.setState({
      name: this.props.defaultName || '',
      description: this.props.defaultDescription || '',
      website: this.props.defaultWebsite || '',
      item: this.props.defaultItem || ''
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }




  render() {
    return (
      <form onSubmit={(event) => this.handleSubmitForm(event)}>
        <div className='form-row'>
          <label htmlFor='title'>Charity Name:</label><br/>
          <input
            id='name'
            type='text'
            onChange={(event) => this.updateInput(event)}
            defaultValue={this.props.defaultName}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='description'>Description:</label><br/>
          <input
            id='description'
            type='text'
            onChange={(event) => this.updateInput(event)}
            defaultValue={this.props.defaultDescription}
            required
          />
        </div>
<div className='form-row'>
          <label htmlFor='website'>Website:</label><br/>
          <input
            id='website'
            type='text'
            onChange={(event) => this.updateInput(event)}
            defaultValue={this.props.defaultWebsite}
            required
          />
        </div>
        <div className='form-row'>
          <label htmlFor='item'>Item:</label><br/>

          <Select
              defaultValue={this.state.defaultItem}
              style={{ width: 120 }}
              onChange={(newVal) => this.handleUpdateCategory(newVal)}
            >
              <Option value="General">General</Option>
              <Option value="OldTowels">Old Towels</Option>
              <Option value="Mattress">Mattress</Option>
            </Select>


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
    );
  }
}



GeneralForm.propTypes = {
  action: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  defaultTitle: React.PropTypes.string,
  defaultDescription: React.PropTypes.string,
  defaultWebsite: React.PropTypes.string,
  defaultItem: React.PropTypes.string
};

export { GeneralForm };
