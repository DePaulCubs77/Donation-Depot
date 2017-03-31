import * as React from 'react';
import { Row, Col, Carousel } from 'antd';

class Home extends React.Component {
  render() {
    return (     
  <div>
     
      <Carousel autoplay effect="fade">
        <div><img className="imageclass" src="images/donation-depot.jpg" /></div>
        <div><img className="imageclass2" src="images/donategal.jpg" /></div>
        <div><img className="imageclass3" src="images/uberkids.jpg" /></div>
        <div><img className="imageclass4" src="images/donatenow.jpg" /></div>
      </Carousel>


  </div>

    );
  }
}

export { Home };