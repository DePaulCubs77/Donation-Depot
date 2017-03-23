import * as React from 'react';
import { HiHeader } from './HiHeader';

import { DonateItems } from './DonateItems';
import { Home } from './Home';
import { Row, Col, Layout, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function callback(key) {
  console.log(key);
}



class Main extends React.Component {
  render() {
    return (
      
  <div>      
<Layout>
      <Sider className ='main-side'>
        <DonateItems />
      </Sider>

      <Layout>
        <Header className = 'header'>
          <HiHeader />
        

        </Header>
       
      <Content className = 'main-content'>


          <div >
           {this.props.children}
          </div>
        </Content>
      
    
  

        

        <Footer className = 'main-foot'>
          Maria-Dee Donations Support Inc. © 2017
        </Footer>
      </Layout>
    </Layout>


      </div>
    );
  }
}

export { Main };


