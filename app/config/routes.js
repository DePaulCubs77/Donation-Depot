import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Main } from '../components/Main';
import { Home } from '../components/Home';
import { Donate } from '../components/Donate';
import { DonateItems } from '../components/DonateItems';
import { AddCharity } from '../components/AddCharity';
import { AddComment } from '../components/AddComment';
import { CommentTip } from '../components/CommentTip';


const router = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='home' component={Home} />
      <Route path='donate' component={Donate} />
      <Route path='donateitems' component={DonateItems} />
      <Route path='commenttip' component={CommentTip} />
      <Route path='addcharity' component={AddCharity} />
      <Route path='addcomment' component={AddComment} />
      
    
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export { router };
