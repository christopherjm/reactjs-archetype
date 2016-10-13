import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/components/Header';
import Menu from './menu/components/Menu';
import MainContentContainer from './content/components/MainContentContainer';
import Footer from './footer/components/Footer';

import { Provider } from 'react-redux';
import store from './store';


// Stylesheets
require('../style/main.scss');

class Application extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <div id="bp-page-wrapper">
            <Header title="Inventory Tracker" subtitle="ver 1.0" username="cmariano"/>
            <MainContentContainer id="bp-body"/>
            <Footer/>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('app'));
