import * as React from 'react';
import * as axios from 'axios';
import { notification, Row, Col} from 'antd';

class CommentTip extends React.Component {

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
  //

  sendSuccessNotification() {
    
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Try Again',
      description: 'An unexpected error occurred, please try again.',
    });
  }
  // Initial State

  initializeState() {
    this.setState({
      loading: false,
      commentList: []
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
    console.log("it changed");
  
    this.startLoading();
    axios.get('/get-comment')
      .then((response) => {
        this.endLoading();
        this.sendSuccessNotification();
        //this.redirectToHome();
        // set the state for a this component
        console.log("the response info",response.data);
        this.setState({ commentList: response.data});
        
      })
      .catch((error) => {
        this.endLoading();
        this.sendErrorNotification();
      });
  }

  render() {
    return (
        <div>
   
                <Row><Col span={24}><br></br></Col></Row>
                <Row>
                  <Col span={7}></Col>
                  <Col span={8}>
                    <h3>Comments</h3>
                  </Col>
                  <Col span={9}></Col>
                </Row>
                
                <Row><Col span={24}><br></br></Col></Row>
                <Row> <Col span={24}><br></br></Col></Row>          
                <Row>
                  <Col span={1}></Col>
                  <Col span={5}></Col>

                  <Col span={13}>
                      
                        {/* render the items for the state*/}
                        <ul>
                            <li>{this.state.commentList.map(comment => (<div key={comment._id}>{comment.comdescription}</div>))} </li> 
                                        
                        </ul>
                  </Col>    
                </Row>  
          </div>           
    );
  }
}

//  contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.

CommentTip.contextTypes = {
  router: React.PropTypes.any
};

export { CommentTip };
